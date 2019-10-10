import React, { Component } from 'react';

import github from '../apis/github';

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

    console.log(response);

    this.setState({
      users: response.data.items
    });
  }
  onUserSelect = async username => {
    const response = await github.get(`/users/${username}`);

    console.log(response);

    this.setState({
      selectedUser: response.data
    });
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
