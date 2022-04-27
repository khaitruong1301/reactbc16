import { ADD_COMMENT } from "../actions/types/fakeBookAppType";



const stateDefault = {
    arrComment: [
        {name:'khai',content:'hello cyberosft'},
        {name:'uyen',content:'hello bc16'},
    ]
}


export const fakeBookAppReducer = (state=stateDefault,action) => {

    switch(action.type) {

        case ADD_COMMENT: {
            state.arrComment = [...state.arrComment,action.userComment];

            return {...state};
        }

        default : return state;
    }

}