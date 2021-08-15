import './App.css';
import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                setList(data);
            })
    });
    //{list.map((val) => {
    //return <h3>{val.name}</h3>
    //})}
    return (
        <div className="App">
            <Router>
                <Link to='/'>homepage</Link>
                <br/>
                <Link to='/page2'>page2</Link>
                <Switch>
                    <Route exact path='/' component={() => { return <h2>homepage</h2> }} />
                    <Route exact path='/page2' component={() => { return <h2>page2</h2> }} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
