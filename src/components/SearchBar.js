import React from 'react';

/*
 * Need to use class component as we need to use state
 * in order to handle the user input from the search bar
 */

class SearchBar extends React.Component {
  // Gets called thru onChange property set within input
  // Community conventional ~ on|element name|event name
  //   onInputChange(event) {
  //     let text = event.target.value;
  //     console.log(text);
  //   }
  state = { term: '' };

  // Arrow functions automatically bind the value of this for all code inside function
  onFormSubmit = event => {
    // Prevents form from submitting
    event.preventDefault();
    // Assign state.term to callback
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // Controlled component
              value={this.state.term}
              onChange={event => this.setState({ term: event.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
