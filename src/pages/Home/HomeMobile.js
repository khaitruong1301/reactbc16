import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { http, TOKEN_CYBERSOFT } from '../../util/config';
import { getPhimApiAction } from '../../redux/actions/phimActions';

export default function HomeMobile(props) {

    console.log(props);
    const { arrPhim } = useSelector(state => state.phimReducer);
    const dispatch = useDispatch();
    useEffect(async () => {

        /*
            dispatch redux có dạng action
            action1: {type , data} => Có dữ liệu sẵn muốn đưa lên redux 
            action2: (dispatch) => {} Dành cho các nghiệp vụ phải qua xử lý thì mới có được dữ liệu
          */
        const action = getPhimApiAction('GP07');
        dispatch(action);
    }, [])


    console.log(arrPhim);
    const renderPhim = () => {

        return arrPhim.map((phim, index) => {
            return <div className='col-6'>
                <div className='d-flex'>
                    <img src={phim.hinhAnh} height={75} width={100} alt="..." />
                    <div>
                        <p>{phim.moTa.length > 50 ? phim.moTa.substr(0,50) + '...' : phim.moTa}</p>
                        <button className='btn btn-success'>Đặt vé</button>
                    </div>
                </div>
            </div>
        })

    }

    return (
        <div className='container'>
            <h3 className='text-center'>Danh sách phim</h3>
            <div className='row'>
                {renderPhim()}
            </div>
        </div>
    )
}
