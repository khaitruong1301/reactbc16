//rcc
import React, { Component } from 'react'

export default class CardProduct extends Component {


  render() {
    //this.props: là thuộc tính có sẵn của react class component dùng để nhận giá trị từ component cha truyền vào
    //this.props là thuộc tính không thể gán lại giá trị (readonly)
    // this.props.name = 'abc';
    // Phân biệt state và props
    // + Giống nhau: Đều là thuộc tính có sẵn của react class component => dùng để chứa dữ liệu render lên giao diện
    /* + Khác: 
        this.state dùng để chứa giá trị thay đổi trên giao diện và có thể gán lại được thông qua phương thức setState.
        this.props nhận dữ liệu từ component cha truyền vào và không thể gán lại giá trị được (readonly value)
    */  
    return (    
      <div className='card'>
          <img src={this.props.img} alt='...' />
          <div className='card-body'>
              <p>{this.props.name}</p>
              <p>{this.props.price}</p>
              <button className='btn btn-success'>Add to cart</button>
          </div>
      </div>
    )
  }
}
