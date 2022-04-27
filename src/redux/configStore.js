import { combineReducers, createStore } from 'redux';
import { fakeBookAppReducer } from './reducers/fakeBookAppReducer';
import { formDangKyReducer } from './reducers/formDangKyReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import { arrTaskReducer } from './reducers/toDoAppReducer';
import { XucXacReducer } from './reducers/XucXacReducer';


const rootReducer = combineReducers({
    //Các state của ứng dụng đặt tại đây
    gioHangState: gioHangReducer,
    XucXacReducer:XucXacReducer,
    formDangKyReducer: formDangKyReducer,
    fakeBookAppReducer:fakeBookAppReducer,
    arrTaskReducer:arrTaskReducer
});




export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());