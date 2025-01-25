const ToDoModel = require("../model/list.model");

// Getdata Part
const Getdata = async (req, res) => {
    try {
        const data = await ToDoModel.find();
        res.json({ message: data });
    } catch (error) {
        res.json({ message: error?.message });
    }
}
// AddData Part
const Adddata = async (req, res) => {
    const { Task, completed } = req.body;
    if (!Task) {
        return res.json({ message: "Task is required" });
    }
    try {
        const ToDo = await ToDoModel.create({ Task, completed });
        res.status(200).json({ message: "added successfully" });

    } catch (error) {
        res.status(400).json({ message: error?.message });
    }
}

// Update Part
const Updatedata = async (req, res) => {
    const { Task, completed } = req.body;
    const { id } = req.params;

    if (!id) {
        return res.json({ message: "id is required" });
    }
    try {
        const ToDo = await ToDoModel.findByIdAndUpdate(id, { Task, completed });
        res.status(200).json({ message: "updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}

// Delete Part
const Deletedata = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.json({ message: "id is required" });
    }
    try {
        const ToDo = await ToDoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });

    }
}

module.exports = { Getdata, Adddata, Updatedata, Deletedata }

