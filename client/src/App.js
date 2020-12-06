import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null
      }
  }

  handleChange = (e) =>{
    this.setState({
      selectedFile: e.target.files[0],
      loaded: 0,
    })
  }

  handleSubmit = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8080/", data, {
    })
    .then(res => {
      console.log(res.statusText)
    })
  }

  render() {
    return (
      <div className="App">
        <input type="file" name="image" onChange={this.handleChange}/>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default App;
