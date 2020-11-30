import './App.css';
import React from 'react';
import Forces from './components/Forces';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  return (
    <div className="App">
      <Forces />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
