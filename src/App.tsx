import React from 'react';
import './App.css';
import { Dashboard } from './components/dashboard';

const App: React.FC = () : JSX.Element => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
