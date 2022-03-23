import React, { Component } from 'react'

export default class ExThayDoiAnhDaiDien extends Component {

    state = {
        imgSrc: 'https://i.pravatar.cc?u=1' //Sau khi xác định state cho giá trị mặc định luôn
    }

    handleChangeAvatar = () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1; // =>tạo 1 con số ngẫu nhiên từ 1->100
        let newImgSrc = `https://i.pravatar.cc?u=${randomNumber}`;
        //Xử lý setState
        this.setState({
            imgSrc: newImgSrc
        })
    }

    render() {
        return (
            <div className='container'>
                <h3>Bài tập 2: Thay đổi ảnh đại diện ngẫu nhiên</h3>
                <div className='card w-25'>
                    <img src={this.state.imgSrc} alt='...' />
                    <div className='card-body'>
                        <button className='btn btn-danger' onClick={()=>{
                            this.handleChangeAvatar();
                        }}>Change avatar</button>
                    </div>
                </div>

            </div>
        )
    }
}
