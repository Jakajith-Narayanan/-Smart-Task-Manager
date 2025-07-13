import React, { useState } from "react";
import axios from "axios";


const AddTask = ({ onTaskAdded }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "LOW",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/tasks", formData);
      onTaskAdded(); // Notify parent to refresh list
      setFormData({
        title: "",
        description: "",
        status: "TODO",
        priority: "LOW",
        dueDate: "",
      });
    } catch (err) {
      console.error("Failed to add task:", err);
      alert("Error creating task");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <h2>Add New Task</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        required
        rows={3}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      ></textarea>
      <div style={{ display: "flex", gap: "1rem", marginBottom: "10px" }}>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="TODO">To Do</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        <select name="priority" value={formData.priority} onChange={handleChange}>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "4px" }}>
        ➕ Add Task
      </button>
    </form>
  );
};

export default AddTask;
