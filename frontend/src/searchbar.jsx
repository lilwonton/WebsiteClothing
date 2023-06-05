import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  fetchsearchresult = async () => {
    const { searchTerm } = this.state;
    try {

//retrieving data from my database through localhost:3000
//searchTerm is responsible for the users input
      const response = await axios.get(`http://localhost:3000?color=` + searchTerm); 
      this.props.onSearch(response.data);

//if there was an error in the database, the code below will send an alert via console log
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <input type="text" value={searchTerm} onChange={this.handleInputChange} />
        <button onClick={this.fetchsearchresult}>SEARCH</button>
        <div></div>
      </div>
    );
  }
}

export default SearchBar;