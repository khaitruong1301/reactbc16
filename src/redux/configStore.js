import { applyMiddleware, combineReducers, createStore } from 'redux';
import { fakeBookAppReducer } from './reducers/fakeBookAppReducer';
import { formDangKyReducer } from './reducers/formDangKyReducer';
import { gioHangReducer } from './reducers/gioHangReducer';
import { phimReducer } from './reducers/phimReducer';
import { arrTaskReducer } from './reducers/toDoAppReducer';
import { XucXacReducer } from './reducers/XucXacReducer';
//Cấu hình middleware redux thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk'
import { modalReducer } from './reducers/modalReducer';
const rootReducer = combineReducers({
    //Các state của ứng dụng đặt tại đây
    gioHangState: gioHangReducer,
    XucXacReducer,
    formDangKyReducer,
    fakeBookAppReducer,
    arrTaskReducer,
    phimReducer,
    modalReducer: modalReducer
});
const middleware = [
    reduxThunk,
];
const customCompose = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer,customCompose);
