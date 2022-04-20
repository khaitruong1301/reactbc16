

const stateDefault = {
    mangNguoiDung: [
        { taiKhoan: 'nguyenvana', hoTen: 'Nguyễn văn a', email: 'nguyenvana@gmail.com', matKhau: '123123', soDienThoai: '0909090909', loaiNguoiDung: 'QuanTri' },
        { taiKhoan: 'nguyenvanb', hoTen: 'Nguyễn văn b', email: 'nguyenvanb@gmail.com', matKhau: '321321', soDienThoai: '08080808008', loaiNguoiDung: 'QuanTri' },
    ],

    nguoiDungSua: {
        taiKhoan: 'nguyenvanb',
        hoTen: 'Nguyễn văn b',
        email: 'nguyenvanb@gmail.com',
        matKhau: '321321',
        soDienThoai: '08080808008',
        loaiNguoiDung: 'QuanTri'
    }
}


export const formDangKyReducer = (state = stateDefault, action) => {

    switch (action.type) {
        case 'DANG_KY': {
            state.mangNguoiDung = [...state.mangNguoiDung, action.nguoiDung];

            return { ...state };

        }
        case 'XOA_NGUOI_DUNG': {
            state.mangNguoiDung = [...state.mangNguoiDung];

            state.mangNguoiDung = state.mangNguoiDung.filter(nd => nd.taiKhoan !== action.taiKhoan);

            return { ...state };

        }
        case 'SUA_NGUOI_DUNG' : {
            state.nguoiDungSua = action.nguoiDung;
            return {...state};
        }
        case 'CAP_NHAT_NGUOI_DUNG' : {
            state.mangNguoiDung = [...state.mangNguoiDung];

            //Tìm ra object chỉnh sửa dựa vào tài khoản
            let nguoiDungCapNhat = state.mangNguoiDung.find(nd=>nd.taiKhoan === action.nguoiDung.taiKhoan);
            if(nguoiDungCapNhat) {
                // nguoiDungCapNhat = action.nguoiDung;
                // nguoiDungCapNhat.email = action.nguoiDung.email;
                //....
                for(let key in nguoiDungCapNhat){
                    nguoiDungCapNhat[key] = action.nguoiDung[key];
                }
            }

            return{...state};


        }
        default: return state;
    }

}