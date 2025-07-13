import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTask from "./AddTask"; // 👈 Import it

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/tasks");
      setTasks(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${id}`);
      fetchTasks(); // Refresh after delete
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <AddTask onTaskAdded={fetchTasks} /> {/* 👈 Insert AddTask */}
      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: <strong>{task.status}</strong></p>
            <p>Priority: <strong>{task.priority}</strong></p>
            <p>Due Date: {task.dueDate}</p>
            <div className="task-actions">
              <button className="edit" onClick={() => alert("Edit coming soon")}>Edit</button>
              <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
