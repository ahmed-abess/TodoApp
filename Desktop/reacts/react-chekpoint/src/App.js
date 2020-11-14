import Nav from "./component/Navbar";
import React from 'react';
import './App.css';
import Form from './component/Form'
import Navbar from './component/Navbar';

class App extends React.Component{
  render() {


    return (
        <div className="App">
          <div className="container">
        <Navbar/>
        <div className="col-6 offset-3 ">
         <Form/>
        </div>
          </div>
          </div>

    );
  }
}

export default App;
