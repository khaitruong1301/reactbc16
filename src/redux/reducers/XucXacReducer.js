

const stateDefault = {
    banChon: true, // true: Tài | false:xỉu
    soBanThang: 5,
    tongSoBanChoi: 10,
    mangXucXac: [
        { diem: 6, src: './img/gameXucXac/6.png' },
        { diem: 6, src: './img/gameXucXac/6.png' },
        { diem: 61, src: './img/gameXucXac/6.png' }
    ]
}


export const XucXacReducer = (state = stateDefault, action) => {

    switch (action.type) {

        case 'DAT_CUOC': {
            state.banChon = action.banChon;
            return { ...state };
        }
        case 'PLAY_GAME': {
            // console.log(123)
            //Bước 1: xử lý tạo mảng xúc xắc random
            let mangXXNN = [];
            for (let i = 1; i <= 3; i++) {
                //Mỗi lần chạy mình sẽ tạo ra 1 con số ngẫu nhiên
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                //Từ số ngẫu nhiên tạo ra object xúc xắc
                let xxnn ={diem: soNgauNhien, src: `./img/gameXucXac/${soNgauNhien}.png`};
                //Thêm object ngẫu nhiên vào mảng ngẫu nhiên
                mangXXNN.push(xxnn);
            }
            //Cập nhật lại state (setState);
            state.mangXucXac = mangXXNN;
            //Bước 2: Tính điểm thắng thua
            let tongDiem = mangXXNN.reduce((diem,xucXac) => {
                return diem + xucXac.diem;
            },0);
            

            //Bước 3: Tăng bàn chơi lên 1
            if((state.banChon && tongDiem > 11) || (!state.banChon && tongDiem <= 11)) {
                state.soBanThang += 1;
            }

            state.tongSoBanChoi += 1;
            return { ...state };
        }

        default: return state; //default là trường hợp chưa gọi gì đến hàm reducer này
    }
}
//return state trong hàm reducer sẽ phụ thuộc vào giá trị default của state (Ví dụ: stateDefault là object => reducer phải return về object, stateDefault là arr thì reducer phải return về array)