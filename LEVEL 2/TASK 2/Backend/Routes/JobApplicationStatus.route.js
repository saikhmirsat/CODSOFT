const { JobApplicationStatusModel } = require('../Models/JobApplicationStatus.model');
const { EmployeeJobPostModel } = require('../Models/EmployeeJobPost.model')
const express = require('express');

const JobApplicationStatusRouter = express.Router();

// JobApplicationStatusRouter.get('/', async (req, res) => {
//     try {
//         const data = await JobApplicationStatusModel.find();
//         res.status(200).send(data); // Status 200 indicates a successful response.
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ msg: "Internal Server Error", status: false });
//     }
// });
JobApplicationStatusRouter.get('/:user', async (req, res) => {
    const { user } = req.params
    try {
        const data = await JobApplicationStatusModel.find({ user });
        res.status(200).send(data); // Status 200 indicates a successful response.
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: "Internal Server Error", status: false });
    }
});

JobApplicationStatusRouter.post('/apply', async (req, res) => {
    try {
        const data = new JobApplicationStatusModel(req.body);
        await data.save();
        res.status(201).send({ msg: "Job applied successfully", status: true, data });
        // Status 201 indicates a successful creation of a resource.
    } catch (err) {
        console.error(err);
        res.status(500).send({ msg: "Internal Server Error", status: false });
    }
});


JobApplicationStatusRouter.get("/filteredData/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        // Find the user's job posts based on user
        const jobPosts = await EmployeeJobPostModel.find({ user: userId });

        // Find the user's job applications based on jobData.user
        const jobApplications = await JobApplicationStatusModel.find({ "jobData.user": userId });

        // Return the job applications data
        return res.status(200).json(jobApplications);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});

JobApplicationStatusRouter.patch("/update/:id", async (req, res) => {
    const jobId = req.params.id; // Get the job application ID from the request params

    try {
        const updatedFields = req.body; // Assuming your request body contains the fields to update

        // Use findByIdAndUpdate to update the document by its ID
        const updatedApplicationStatus = await JobApplicationStatusModel.findByIdAndUpdate(
            jobId, // Use jobId to find the document by its ID
            { $set: { status: updatedFields.status } }, // Update only the 'status' field
            { new: true } // This option returns the updated document
        );

        if (!updatedApplicationStatus) {
            return res.status(404).json({ message: "Job application status not found" });
        }

        res.json({ message: "Updated", success: true, data: updatedApplicationStatus });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
});






module.exports = {
    JobApplicationStatusRouter
};
