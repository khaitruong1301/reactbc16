import React, { useRef } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { addCommentAction } from '../../../redux/actions/fakeBookAppAction';

export default function FakeBookApp(props) {

    //useSelector dùng để lấy dữ liệu state từ redux về component;
    const arrComment = useSelector(rootReducer => rootReducer.fakeBookAppReducer.arrComment);
    const dispatch = useDispatch();
    
    const userCommentRef = useRef({name:'',content:''});

    const handleChange = (e) => {
        let {value,id} = e.target;
        userCommentRef.current[id] = value;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('userComment',userCommentRef.current);


        const action = addCommentAction(userCommentRef.current);
        //Đưa dữ liệu action lên redux
        dispatch(action);
    }
    console.log('arrComment', arrComment)

    return (
        <div className='container'>
            <h3>FakeBookApp</h3>
            <div className='card'>
                <div className='card-header'>
                    {arrComment.map((userComment, index) => {
                        return <div className='row' key={index}>
                            <div className='col-2'>
                                <img src={`https://i.pravatar.cc?u=${userComment.name}`} alt='...' width={50} height={50} />
                            </div>
                            <div className='col-10'>
                                <p className='text-danger font-weight-bold'>{userComment.name}</p>
                                <p>{userComment.content}</p>
                            </div>
                        </div>
                    })}


                </div>
                <form className='card-body' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <p>name</p>
                        <input className="form-control" id="name" name="name" onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <p>content</p>
                        <input className="form-control" id="content" name="content" onChange={handleChange} />
                    </div>
                    <div className='form-group'>
                        <button className='btn btn-success'>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}


// const mapStateToProps = (state)=>{ 
//     return {
//         arrComment:state.fakeBookAppReducer.arrComment
//     }
// }

// export default connect(mapStateToProps)(FakeBookApp)