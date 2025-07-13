import React from 'react';
import TaskList from './components/TaskList';

function App() {
  console.log("App is rendering");  // 🧪 Debug line
  return (
    <div className="container">
      <h1>📝 Smart Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
