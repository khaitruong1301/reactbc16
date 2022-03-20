import React, { Component } from 'react'
import BTContent from './BTContent'
import BTFooter from './BTFooter'
import BTHeader from './BTHeader'
import BTNavigation from './BTNavigation'

export default class BaiTapLayout extends Component {
    render() {
        //Nội dung của component phải được chứa trong 1 thẻ nào đó bao phủ
        return (
            <section>
                <div>Bài tập layout</div>
                <BTHeader />
                <div className='d-flex' style={{ height: '75vh' }} >
                    <div className='w-25 h-100'>
                        <BTNavigation />
                    </div>
                    <div className='w-75 h-100'>
                        <BTContent />
                    </div>
                </div>
                <div>
                    <BTFooter />
                </div>

            </section>

        )
    }
}
