import { http } from "../../util/config";



//closure function
export const getPhimApiAction = (maNhom ='GP01') => {
    return async (dispatch) => {
        try {

          //Gọi api = axios
          let result = await http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`)
          //ĐƯA DỮ LIỆU TỪ API VỀ REDUX
          const action = {
            type:'LAY_DANH_SACH_PHIM',
            arrPhim:result.data.content
          };
          console.log(result.data);
          dispatch(action);
        } catch (err) {
          console.log(err)
        }
    }
}


// const addPhim = (phim) => {

//     return async (dispatch) => {
//         let result = await http.post('/addphim',{});
//         //Get all phim
//         // let arrPhim = await http.get();
//         const action = getPhimApiAction('GP07');
//         dispatch(action);
//     }
// }



