import React, { Component } from 'react';

import github from '../apis/github';
import SearchBar from './SearchBar';
import UserList from './UserList';
import UserInfo from './UserInfo';

class App extends Component {
  state = {
    users: [],
    selectedUser: null,
    selectedView: 'list'
  }
  onQuerySubmit = async q => {
    const response = await github.get('/search/users', {
      params: { q }
    });

    console.log(response.data.items);

    this.setState({
      users: response.data.items
    });
  }
  onUserSelect = async ({ login }) => {
    const response = await github.get(`/users/${login}`);

    console.log(response.data);

    this.setState({
      selectedUser: response.data
    });
  }
  render() {
    return (
      <div className="ui container App">
        <h1>Debut Github Search</h1>
        <div className="ui grid">
          <div className="ui row">
            <div className="column">
            <SearchBar onFormSubmit={this.onQuerySubmit} />
            </div>
          </div>
          <div className="ui row">
            <div className="four wide column">
              <UserList users={this.state.users} onUserSelect={this.onUserSelect} />
            </div>
            <div className="twelve wide column">
              <UserInfo user={this.state.selectedUser} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
