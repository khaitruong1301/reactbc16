import React, { Component } from 'react'

export default class Detail extends Component {


  render() {

    return (
      <div>
          <p>Home {this.props.match.url}</p>
          Detail: {this.props.match.params.postid}
          <p>Search: {this.props.location.search}</p>
      
      </div>
    )
  }
}
