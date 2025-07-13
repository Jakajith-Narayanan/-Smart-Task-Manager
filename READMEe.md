# 📝 Smart Task Manager

A full-stack **Task Management Application** built using **Java (Spring Boot)** for the backend and **React (Vite)** for the frontend. The project connects with a **MySQL** database and allows users to create, view, update, and delete tasks with due dates, priorities, and statuses.

---

## 🚀 Live Project Status

> ✅ Backend: Spring Boot REST API  
> ✅ Frontend: React with Vite  
> ✅ Database: MySQL  
> ✅ CRUD Features Fully Functional  
> ❌ No authentication (can be added later)

---

## 📦 Tech Stack


| Layer       | Tech Used                         |

|-------------|-----------------------------------|


| 🧠 Backend  | Java 22, Spring Boot 3.5, JPA     |

| 🎨 Frontend | React 18, Vite, Basic CSS         |

| 🛢️ Database | MySQL 8.x                         |

| API         | RESTful API (JSON over HTTP)      |

| Dev Tools   | Postman, npm, Maven, Git          |

---

## 🧱 Folder Structure
task-manager/

├── backend/ → Spring Boot app

│ ├── src/

│ ├── pom.xml

│ └── ... (controllers, models, etc.)

│

├── front-end/ → React + Vite frontend

│ ├── src/

│ │ ├── components/

│ │ └── App.jsx, index.css, etc.

│ ├── index.html

│ ├── vite.config.js

│ └── package.json

│

├── README.md





---

## 🔧 Features

- 📝 Add new tasks with title, description, priority, status, and due date
- 📋 List all tasks
- ✏️ Update/edit tasks (coming soon)
- ❌ Delete tasks
- 📅 Track deadlines visually
- 🔌 Fully decoupled frontend and backend for better scalability

---

## 🧑‍💻 How to Clone and Run This Project

### ✅ Prerequisites


| Tool          | Version        |

|---------------|----------------|

| Node.js       | 20.19.0+       |

| npm           | 9+             |

| Java          | 17+ (tested on Java 22) |

| Maven         | 3.9+           |

| MySQL         | 8.x            |

| Git           | Latest         |

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/your-username/smart-task-manager.git
cd smart-task-manager
```



 2. Setup MySQL Database
Open MySQL CLI or phpMyAdmin

Run the following SQL:

```sql
CREATE DATABASE taskdb;
```
🧠 3. Setup Backend
```bash
cd backend
```
➕ Configure application.properties
src/main/resources/application.properties:

properties

spring.datasource.url=jdbc:mysql://localhost:3306/taskdb
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.cors.allowed-origins=http://localhost:5173



🚀 Start Spring Boot

```bash

./mvnw spring-boot:run
```

This will launch the backend on: http://localhost:8080

💻 4. Setup Frontend

```bash
cd ../front-end
```

📦 Install dependencies
```bash
npm install

```


🚀 Start the Vite development server

```bash

npm run dev
```

Frontend will run at: http://localhost:5173


🔄 How the Frontend and Backend Work Together
React frontend runs on port 5173

Spring Boot backend runs on port 8080

API calls are made from React → to http://localhost:8080/api/tasks

Example API endpoints:

GET /api/tasks — Fetch all tasks

POST /api/tasks — Create a task

PUT /api/tasks/{id} — Update task

DELETE /api/tasks/{id} — Delete task

🧪 Sample Task JSON Structure
json

Copy

Edit
{
  "title": "Complete Spring Boot Setup",
  "description": "Finish the backend part",
  "status": "IN_PROGRESS",
  "priority": "HIGH",
  "dueDate": "2025-07-15"
}

💡 Helpful Commands Summary

Command	Purpose

git clone <repo-url>	Clone the repo

cd backend && ./mvnw spring-boot:run	Run Spring Boot API server

cd front-end && npm install	Install frontend dependencies

npm run dev	Start React frontend with Vite

mysql -u root -p	Open MySQL CLI

CREATE DATABASE taskdb;	Create DB schema


📜 License
This project is licensed under the MIT License

swift
Copy
Edit
MIT License

Copyright (c) 2025 Jithu

Permission is hereby granted, free of charge, to any person obtaining a copy...
🤝 Contributing
Pull requests are welcome. For major changes, open an issue first to discuss what you would like to change.

📬 Contact
Feel free to reach out if you have questions:

Name: Jakajith Narayanan 
Email: jakajithnarayanan@gmail.com 
GitHub: Jakajith-Narayanan

