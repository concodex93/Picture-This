import React from 'react';

/*
 * Need to use class component as we need to use state
 * in order to handle the user input from the search bar
 */

class SearchBar extends React.Component {
  // Gets called thru onChange property set within input
  // Community conventional ~ on|element name|event name
  onInputChange(event) {
    let text = event.target.value;
    console.log(text);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
