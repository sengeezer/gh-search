import React, { Component } from 'react';

import github from '../apis/github';
import SearchBar from './SearchBar';
import UserList from './UserList';
import UserInfo from './UserInfo';
import UsersFound from './UsersFound';
import ViewModeSwitch from './ViewModeSwitch';

class App extends Component {
  state = {
    users: [],
    usersFound: null,
    selectedUser: null,
    selectedView: 'alignjustify'
  }
  onQuerySubmit = async q => {
    const response = await github.get('/search/users', {
      params: { q }
    });

    this.setState({
      users: response.data.items,
      selectedUser: null,
      usersFound: response.data.items.length
    });
  }
  onUserSelect = async ({ login }) => {
    const response = await github.get(`/users/${login}`);

    this.setState({
      selectedUser: response.data
    });
  }
  onViewModeSwitch = evt => {
    console.log(evt.target);

    if (evt.target.children.length) {
      const classList = evt.target.children[0].className.split(' ');
      classList.pop();
      const mode = classList.join('');
    
      this.setState({
        selectedView: mode
      });
    }
  }
  render() {
    return (
      <div className="ui container App">
        <h1>Simple Github Search</h1>
        <div className="ui grid">
          <div className="ui row">
            <div className="column">
            <SearchBar onFormSubmit={this.onQuerySubmit} />
            </div>
          </div>
          <div className="ui row">
            <div className="four wide column">
              <UsersFound usersFound={this.state.usersFound} />
              <UserList
                users={this.state.users}
                onUserSelect={this.onUserSelect}
              />
            </div>
            <div className="twelve wide column">
              {
                this.state.selectedUser
                && <ViewModeSwitch
                  selectedView={this.state.selectedView}
                  onViewModeSwitch={this.onViewModeSwitch}
                />
              }
              <UserInfo
                user={this.state.selectedUser}
                selectedView={this.state.selectedView}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
