import React, { memo } from 'react'

function ChildComponent(props) {

    console.log('child component');
    return (
        <div className='bg-success p-5'>
            Child component
            <h3>Number: {props.renderNumber()}</h3>
        </div>
    )
}

//memo : shallow compare (chỉ so sánh props đối với number, string, boolean)
export default memo(ChildComponent)