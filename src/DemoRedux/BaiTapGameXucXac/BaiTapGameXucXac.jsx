import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from './BaiTapGameXucXac.module.css'
export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${style['game-xuc-xac']} `}>
                <div className='container'>
                    <h3 className='display-4 text-center pt-3'>Bài tập game xúc xắc</h3>
                    <XucXac />
                    <KetQuaTroChoi />
                </div>
            </div>
        )
    }
}
