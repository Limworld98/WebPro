import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Main></Main>
      </div>
    );
  }
}

export default App;
