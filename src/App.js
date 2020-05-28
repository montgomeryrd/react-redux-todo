import React from 'react';
import Dashboard from './components/dashboard/index';
import TaskBar from './components/taskbar/index';
import TaskList from './components/tasklist/index';

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