import './App.css';
import React, {useState} from 'react'
import GameEntry from './components/GameEntry';
import {Route, BrowserRouter as Router} from "react-router-dom"
import GamePage from './components/GamePage';
import UserName from './components/UserName'

function App() {
  return (
    <Router>
    <div className="App">
      <Route path = "/" exact component = {GameEntry}/>
      <Route path = "/GamePage" component = {GamePage}/>
    </div>

    </Router>
  );
}

export default App;
