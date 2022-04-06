import { combineReducers, createStore } from 'redux';
import { gioHangReducer } from './reducers/gioHangReducer';
import { XucXacReducer } from './reducers/XucXacReducer';


const rootReducer = combineReducers({
    //Các state của ứng dụng đặt tại đây
    gioHangState: gioHangReducer,
    XucXacReducer:XucXacReducer

});




export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());