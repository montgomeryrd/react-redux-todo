import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import TaskBar from './components/taskbar/TaskBar';
import TaskList from './components/tasklist/TaskList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Dashboard />
        <TaskBar />
        <TaskList />
      </div>
    );
  }
}

export default App;