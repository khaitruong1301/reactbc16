
const stateGioHangDefault = [
    { maSP: 2, tenSP: 'Meizu 16Xs', hinhAnh: './img/meizuphone.jpg', soLuong: 1, giaBan: 7600000 },
]//00xx
export const gioHangReducer = (state = stateGioHangDefault, action) => {
    console.log('action', action);
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            //Tạo ra spGioHang có số lượng
            let spGH = { ...action.spClick, soLuong: 1 };
            let gioHang = state;
            let sp = gioHang.find(spGioHang => spGioHang.maSP === action.spClick.maSP);
            if (sp) {
                sp.soLuong += 1;
            } else {
                gioHang.push(spGH);
            }
            console.log(gioHang);
            //immutable: tính bất biến
            return [...gioHang];//return về state mới
        }
        case 'XOA_GIO_HANG': {
            let gioHang = [...state];
            gioHang = gioHang.filter(sp => sp.maSP !== action.maSPClick);
            return gioHang;
        }

        case 'TANG_GIAM_SO_LUONG': {
            let gioHang = [...state];
            //Tìm sản phẩm tăng giảm
            let sp = gioHang.find(spGH => spGH.maSP === action.maSPClick);
            if (sp) {
                sp.soLuong += action.soLuong;
                if (sp.soLuong < 1) {
                    alert('Số lượng không thể nhỏ hơn 1');
                    sp.soLuong += 1;
                }
            }
            return gioHang;
        }

        default: return state;
    }
}