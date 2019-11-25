import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      message: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate:null,
      newMessage: null


    };

  }
  postDataToDB = message => {
    // 1. Figure out what ID this message needs to have 
    // 2. Use Axios to connect to our API server which will send the data onto our database

    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      idToBeAdded++;
    }
    axios ({
      url: 'http://;localhost:3001/api/postData',
      method: 'POST',
      data: {
        id: idToBeAdded,
        message: message
      }
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })

  };
  render() {


  return (
    <div> 
      
        {/*Display the data we retrieve from the database */}
      <ul>
      </ul>
    <div>
    
    <input 
    type='text'
    placeholder='Add a New Message to the DataBase'
    onChange={ event => this.setState({ message: event.target.value })}
    /> 

    <button onClick= {() => this.postDataToDB (this.state.message)}> ADD </button>
    </div>
    <div>
      <input />
      <button> DELETE </button>
    </div>
    <div>
    <input />
    <input />
      <button> UPDATE </button>
      
    </div>
     </div>
  );
}
}

export default App;
