import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Home extends Component {
    
  render() {
      console.log(this.props)
    return (
      <div>
        
        Home
        <NavLink to={'/detail/123?keyword=abc'}>
          Link demo
        </NavLink>


      </div>
    )
  }
}
