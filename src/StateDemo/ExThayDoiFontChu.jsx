import React, { Component } from 'react'

export default class ExThayDoiFontChu extends Component {

    state = {
        fSize: 50 //state là fontSize 
    }

    handleChangeFontSize = (number) => { //5 | -5
        this.setState({
            fSize: this.state.fSize + number
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Bài tập 1: thay đổi font chữ</h3>
                <p style={{ fontSize: `${this.state.fSize}px` }}>
                    Học lập trình frontend tại cybersoft thật cool !
                </p>
                <button className='btn btn-primary' onClick={() => {
                    this.handleChangeFontSize(5);
                }}>+</button>
                <button className='btn btn-primary ml-2' onClick={() => {
                    this.handleChangeFontSize(-5);
                }}>-</button>
            </div>
        )
    }
}


