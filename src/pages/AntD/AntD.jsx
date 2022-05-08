import React from 'react'
import { DatePicker } from 'antd';
import { Carousel } from 'antd';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};



export default function AntD(props) {
    return (
        <div>
            <DatePicker />
            <Carousel  afterChange={onChange} autoplay={true}>
                <div>
                    {/* <h3 style={contentStyle}>1</h3> */}
                    <img  style={contentStyle} src='https://picsum.photos/id/1/2000' alt='...' className="h-100" />
                </div>
                <div>
                    {/* <h3 style={contentStyle}>2</h3> */}
                    <img  style={contentStyle} src='https://picsum.photos/id/2/2000' alt='...' className="h-100" />

                </div>
                <div>
                    {/* <h3 style={contentStyle}>3</h3> */}
                    <img  style={contentStyle} src='https://picsum.photos/id/3/2000' alt='...' className="h-100" />

                </div>
                <div>
                    {/* <h3 style={contentStyle}>4</h3> */}
                    <img  style={contentStyle} src='https://picsum.photos/id/4/2000' alt='...' className="h-100" />

                </div>
            </Carousel>
        </div>
    )
}
