import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
  state = { query: ''};
  onInputChange = evt => {
    this.setState({ query: evt.target.value });
  }
  onFormSubmit = evt => {
    evt.preventDefault();
    
    this.props.onFormSubmit(this.state.query);
  }
  render() {
    return (
      <div className="searchBar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="fields">
            <div className="ten wide field">
              <label htmlFor="search">Search for users:</label>
              <input
                type="text"
                id="search"
                value={this.state.query}
                onChange={this.onInputChange}
              />
            </div>
            <div className="two wide field">
              <button type="submit" className="searchBarButton ui submit button">Search</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
