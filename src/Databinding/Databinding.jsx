import React, { Component } from 'react'


export default class Databinding extends Component {
    userName = 'abc';
    product = {
        id: 1,
        name: 'Iphone',
        img: 'https://picsum.photos/id/1/200',
        price: 1000
    }
    //Thuộc tính là hàm => phương thức
    renderProduct = () => {
        //Nội dung trả về phải là string, number, component (nội dung trong 1 thẻ bao phủ).
        return (
            <div className='card w-25'>
                <img src={this.product.img} alt="..." className='w-100' />
                <div className='card-body'>
                    <p>{this.product.name}</p>
                    <p>{this.product.price.toLocaleString()}</p>
                    <button className='btn btn-success'>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }

    //1 phương thức render
    render() {
        let title = 'cybersoft';
        return (
            <div className='container'>
                <h3>Databinding</h3>
                <p id="title">{title}</p>
                <p>username: {this.userName}</p>
                <hr />
                {this.renderProduct()}
            </div>
        )
    }
}


// let com = new Databinding()