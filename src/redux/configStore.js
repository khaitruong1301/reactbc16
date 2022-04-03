import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';


const rootReducer = combineReducers({
    //Các state của ứng dụng đặt tại đây
    gioHangState: gioHangReducer,
    //nhiều state
    stateB: (state = 0,action) => {
        console.log('action',action);
        return state;
    },
    stateC: (state = '',action) => {
        console.log('action',action);
        return state;
    },

});




export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());