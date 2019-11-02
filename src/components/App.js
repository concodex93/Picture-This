import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

const url = 'search/photos';

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async term => {
    // Call to axios function
    try {
      const response = await unsplash.get(url, {
        params: { query: term }
      });
      // Set images to state
      if (response.data.results.length !== 0) {
        this.setState({ images: response.data.results });
        console.log(this.state.images);
      } else {
        alert(
          `Hmm, ${term} is a little vague. Can you be a bit more specific?`
        );
      }
    } catch (error) {
      alert(`Ops, something went wrong - ${error}`);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* Pass callback to Searchbar.js */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
