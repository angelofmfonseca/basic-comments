import React, { Component } from 'react'

import NewComment from './NewComment'
import Comments from './Comments'

class App extends Component {
  state = {
    comments: {},
    isLoading: false
  }
  sendComment = comment => {
    const id = this.props.database.ref().child('comments').push().key
    const comments = {}
    comments['comments/' + id] = {
      comment
    }
    this.props.database.ref().update(comments)
  }
  componentDidMount(){
    this.setState({
      isLoading: true
    })
    this.comments = this.props.database.ref('comments')
    this.comments.on('value', snapshot => {
      this.setState({
        comments: snapshot.val(),
        isLoading: false
      })
    })
  }
  render() {
    return (
      <div>
        <NewComment sendComment={ this.sendComment }/>
        <Comments comments={ this.state.comments }/>
        {
          this.state.isLoading 
          &&
          <p>Loading...</p>
        }
      </div>
    )
  }
}

export default App
