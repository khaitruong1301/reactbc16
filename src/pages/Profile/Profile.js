import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {




  render() {

    if(!localStorage.getItem('userLogin')){
        //Nếu chưa đăng nhập => đá về trang đăng nhập
        alert('Chưa đăng nhập nên không thể vào trang !')
        return <Redirect to='/home' />
    }

    return (
      <div>Profile</div>
    )



  }
}
