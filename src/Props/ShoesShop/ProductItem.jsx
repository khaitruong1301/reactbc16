import React, { Component } from 'react'

export default class ProductItem extends Component {

  
  render() {
    //es5: let product = this.props.product;
    let {product} = this.props;

    return (
      <div className='card'>
        <img src={product.image} alt='...' />
        <div className='card-body'>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button className='btn bg-dark text-white'><i class="fa fa-cart-arrow-down"></i> Add to carts</button>
        </div>
      </div>
    )
  }
}
