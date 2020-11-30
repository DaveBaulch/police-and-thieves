import './App.css';
import React from 'react';
import Forces from './components/Forces';

class App extends React.Component {
  state = {
    vforcesdeos: []
  };

  return (
    <div className="App">
      <Forces />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
