

const stateDefault = {
    arrPhim:[
        {maPhim:'1',tenPhim:'Dr.Strange 2',hinhAnh:'https://i.pravatar.cc?u=100'}
    ]
}



export const phimReducer = (state=stateDefault,action) => {


    switch(action.type){

        case 'LAY_DANH_SACH_PHIM': {
            state.arrPhim = action.arrPhim;
            return {...state};
        }
        default: return state;
    }
}