import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';

const url = 'search/photos';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    // Call to axios function
    const response = await unsplash.get(url, {
      params: { query: term }
    });
    // Set images to state
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* Pass callback to Searchbar.js */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found : {this.state.images.length}
      </div>
    );
  }
}

export default App;
