


const stateDefault = {
    arrTask : []
}



export const arrTaskReducer = (state=stateDefault,action) => {
    
    switch(action.type) {
        case 'GET_API': {
            state.arrTask = action.arrTask;
            return state;
        }

        default : return state;
    }
}