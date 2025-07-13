package com.smarttask.taskmanager.services;

import com.smarttask.taskmanager.model.Task;
import com.smarttask.taskmanager.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

	 @Autowired
	 private TaskRepository taskRepository;
	 
	    public List<Task> getAllTasks() {
	        return taskRepository.findAll();
	    }

	    public Task createTask(Task task) {
	        return taskRepository.save(task);
	    }

	    public Task updateTask(Long id, Task updatedTask) {
	        Task task = taskRepository.findById(id).orElseThrow();
	        task.setTitle(updatedTask.getTitle());
	        task.setDescription(updatedTask.getDescription());
	        task.setStatus(updatedTask.getStatus());
	        task.setPriority(updatedTask.getPriority());
	        task.setDueDate(updatedTask.getDueDate());
	        return taskRepository.save(task);
	    }

	    public void deleteTask(Long id) {
	        taskRepository.deleteById(id);
	    }
}
