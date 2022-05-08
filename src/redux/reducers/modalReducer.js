import React from "react";



const stateDefault = {
    component: <p>hello cybersoft</p>
}


export const modalReducer = (state = stateDefault, action) => {

    switch(action.type){

        case 'OPEN_MODAL': {
            state.component = action.component;
            return {...state};
        }

        default: return state
    }
}