import React, { Component } from 'react'
import FormDangKy from './FormDangKy'
import TableNguoiDung from './TableNguoiDung'

export default class BaiTapFormDangKy extends Component {
  render() {
    return (
      <div className='container'>
          <h3 className='text-center'>Bài tập form </h3>
          <FormDangKy />
          <TableNguoiDung />

      </div>
    )
  }
}
