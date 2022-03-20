import React, { Component } from 'react'

export default class HandleEvent extends Component {

  showMessage = () => {
    alert('Hello hello !!!');
  }

  sayHello = (name) => {
    alert('Hi !' + name);
  }


  render() {

    return (
      <div className='container'>
        <h3>Handle event</h3>
        <button id="btn" className='btn btn-success' onClick={this.showMessage}>Click me!!!</button>

        <button id="btn" className='btn btn-success' onClick={() => {
          alert('Hello hello !!!');
        }}>Click me!!!</button>

        <hr />
        <h3>Xử lý sự kiện có tham số</h3>
        <button className='btn btn-success' onClick={this.sayHello.bind(this,'Khải')}>Say hello</button>
        <button className='btn btn-primary' onClick={() =>{
            this.sayHello('Uyên mentor');
            //Gọi nhiều hàm cùng lúc ....
        }}>Say hello</button>
      </div>
    )
  }
}



// function main () {

//   return function () {
//     alert('123');
//   }
// }

// let callback = main();
// callback()