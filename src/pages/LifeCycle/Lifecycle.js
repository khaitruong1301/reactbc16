import React, { Component } from 'react'
import Child from './Child';

export default class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            like: 1,
            objectNumber: {
                number: 1
            }
        };

        console.log('constructor')
    }

    //Hàm dùng để can thiệp vào quá trình thay đổi state và props trước khi render ra giao diện
    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDerivedStateFormProps');

        currentState.like += 1;
        return {...currentState};
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate')
        return true
    }

    render() {
        console.log('render')
        return (
            <div className='container'>
                <h3>Parent Component</h3>
                <p>
                    Number: {this.state.number}
                </p>
                <button className='btn btn-primary mr-2' onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>+</button>
                <button className='btn btn-primary ml-2' onClick={() => {
                    this.setState({
                        number: this.state.number - 1
                    })
                }}>-</button>
                <hr />
                <h3>Parent Component</h3>
                <p>
                    Like: {this.state.like}
                </p>
                <button className='btn btn-primary mr-2' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>+</button>
                <button className='btn btn-primary ml-2' onClick={() => {
                    this.setState({
                        like: this.state.like - 1
                    })
                }}>-</button>

                <hr />
                <h3>Parent Component</h3>
                <p>
                    object number: {this.state.objectNumber.number}
                </p>
                <button className='btn btn-primary mr-2' onClick={() => {
                    let newNumber = {...this.state.objectNumber};
                    newNumber.number += 1;

                    this.setState({
                        objectNumber: newNumber
                    })
                }}>+</button>
                <button className='btn btn-primary ml-2' onClick={() => {
                    let newNumber = {...this.state.objectNumber};
                    newNumber.number += 1;
                    this.setState({
                        objectNumber: newNumber
                    })
                }}>-</button>
                <div className='bg-dark text-white p-3'>
                    <Child objectNumber={this.state.objectNumber} />
                </div>

            </div>
        )
    }

    timeOut = {};
    componentDidMount() {
        console.log('componentDidMount')

        this.timeOut = setInterval(()=>{
            console.log('call api 2 s 1 lần')
        },2000);
    }

    componentWillUnmount(){
        //Hàm này dùng để clear các hàm chạy ngầm của component trước khi component mất khỏi giao diện
        clearInterval(this.timeOut);
    }
}
