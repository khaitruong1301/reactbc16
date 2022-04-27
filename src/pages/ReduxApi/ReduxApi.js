import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
export default function ReduxApi(props) {

    // const arrTask = useSelector(rootReducer => arrTaskReducer.arrTaskReducer.arrTask);

    const { arrTask } = useSelector(rootReducer => rootReducer.arrTaskReducer);
    const dispatch = useDispatch();
    console.log(arrTask);
    useEffect( async () => {

        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            //dispatch lên redux sau khi lấy dữ liệu từ api về
            const action = {
                type:'GET_API',
                arrTask:result.data
            }
            dispatch(action);
            
        } catch (err) {
            console.log({ err })
        }


    }, [])



    console.log(arrTask);

    return (
        <div>ReduxApi</div>
    )
}
