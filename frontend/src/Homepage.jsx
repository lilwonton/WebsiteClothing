import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      searchResults: [],
    };
  }

//in the function "handleSearch", "results" denotes the search results that were retrieved from the database
//the "this.setState" attatches "results" to the "searchResults" property
//attatching results to searchResults allows the results to be shown under Render
handleSearch = (results) => {
  console.log(results)
  console.log("hello")
  this.setState({searchResults: results});
  console.log(this.state)
}

  render() {
    const { searchResults } = this.state;

    return (
      <div className="app">
        <header className="header">
          <nav className="nav">
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
        <p className = {'p1'} style={{ textAlign: 'center'}}>FULL STACK DEVELOPMENT <br></br>UIUX DESIGN<br></br>5.11.2023</p>
          <h1 style={{ textAlign: 'center' }}>RANDOM CLOTHING STORE</h1>
          <div>LOOK FOR SHIRTS AND HOODIES USING THE SEARCH BAR BELOW:</div>
          <div>
         <SearchBar onSearch={this.handleSearch} /> 
         
        <ul>
          {searchResults.map((item) => (
            //item._id, item.style_num, etc are all get requests that are passed through searchResults
            <li key={item._id}>available styles: {item.style_num}, price: ${item.price},color: {item.color}, size: {item.size}</li>
          ))}
        </ul>
      </div>
            <div></div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
        </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
          </div>
        </div>
      </div>
        </header>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}

export default App;