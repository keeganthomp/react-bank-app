import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';


//import components and containers


class App extends Component {
  render() {
    return (

        <div className="main">
          <div className= "jumbotron">
            <h1 className= "display-3">BankShot</h1>
            <p className= "lead">Your world wide banking leader.</p>
            <hr className= "my-4"/>
            <p>Quick, fast, and sometimes accurate account results.</p>
            <p className= "lead">
              <Link className= "btn btn-primary btn-lg" to="/users" role="button">Check Users</Link>
              </p>
            </div>
        </div>


    );
  }
}

export default App;
