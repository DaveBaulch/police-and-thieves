import './App.css';
import React from 'react';
import Forces from './components/Forces';

class App extends React.Component {
  state = {
    forces: [],
    selectedForce: null
  };

  componentDidMount() {
    axios
      .get('https://data.police.uk/api/forces')
      .then((response) => {
        console.log(response.data);
        const forces = response.data;
        this.setState({ forces });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <Forces forcers/>
        <header className="App-header"></header>
      </div>
    );
  }
}

export default App;
