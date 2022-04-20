import React, { Component,PureComponent } from 'react'

export default class Child extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};

        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //Hàm nhận vào props mới (sau khi thay đổi != this.props) và this.state
        //=> Xử lý trả về state mới
        console.log('getDerivedStateFormProps child')
        return currentState; 
    }
    //Khi sử purecomponent => Thì chỉ so sánh props cũ và mới với kiểu dữ liệu primitive value (number,string,boolean) Shallow compare

    // shouldComponentUpdate(newProps, newState) {
    //    if(this.props.number === newProps.number) {
    //        return false;
    //    }
    //    return true;
    // }


    render() {
        console.log('render child')
        return (
            <div>
                <h3>Child component</h3>
                <p>Render props number: {this.props.objectNumber.number}</p>

            </div>
        )
    }
    
    componentDidMount() {
        console.log('componentDidMount child')
    }
}
