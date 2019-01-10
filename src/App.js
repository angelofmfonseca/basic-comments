import React, { Component } from 'react';

import NewComment from './NewComment';
import Comments from './Comments';

class App extends Component {
  state = {
    comments: []
  }
  sendComment = comment => {
    this.setState({
      comments: [...this.state.comments, comment],
    })
  }
  render() {
    return (
      <div>
        <NewComment sendComment={ this.sendComment }/>
        <Comments comments={ this.state.comments }/>   
      </div>
    );
  }
}

export default App;
