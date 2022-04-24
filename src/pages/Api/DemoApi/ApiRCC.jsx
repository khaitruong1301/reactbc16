import React, { Component } from 'react'
import axios from 'axios';
export default class ApiRCC extends Component {

  state = {
    arrTask: []
  }

  getAllTaskApi = async () => {
    {
      //cách 1: Call api dùng promise
      // //Gọi api = axios khi người dùng click vào nút getAllTask
      // let promise = axios({
      //   url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
      //   method: 'GET'
      // });
      // //promise.then là hàm bất đồng bộ (Trong khi nó xử lý thì các hàm bên ngoài vẫn tiếp tục chạy)
      // //Xử lý thành công
      // promise.then((result) => {
      //   console.table(result.data);
      //   console.log('api');
      //   this.setState({
      //     arrTask: result.data
      //   })
      // });
      // //Xử lý thất bại 
      // promise.catch((errors) => {
      //   console.log({ errors })
      // })
      // console.log('ok');
    }
    //Cách 2: Dùng async await (ES7)
    try {
      let result = await axios({
        url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
        method: 'GET'
      });
      //Sau khi đợi api trả về kết quả thì gán vào state
      this.setState({
        arrTask: result.data
      })
      console.log('result', result.data);
      console.log('oke');
    } catch (errors) {
      console.log({ errors });
    }

  }

  componentDidMount() {
    //gọi api sau khi giao diện load xong
    this.getAllTaskApi();

    // setInterval(()=>{
    //   this.getAllTaskApi();
    // },5000)
  }

  render() {
    return (
      <div className='container'>
        <button className='btn btn-success' onClick={() => {
          this.getAllTaskApi();
        }}>Get all task</button>
        <h3 className='text-center display-4'>To do app</h3>
        <div className='d-flex justify-content-center'>
          <table className='table text-center w-50'>
            <tbody>
              {this.state.arrTask.filter(task => task.status === false).map(({ taskName, status }, index) => { //task = {status:false,taskName:'task'}
                return <tr key={index}>
                  <td>{taskName}</td>
                  <td>
                    <i className='badge badge-danger'>incomplete</i>
                    <i className="fa fa-check ml-2" style={{ fontSize: 25, cursor: 'pointer', color: 'green' }}></i>
                  </td>
                </tr>
              })}
              {/* <tr>
                <td>Task 1</td>
                <td>
                  <i className='badge badge-danger'>incomplete</i>
                  <i className="fa fa-check ml-2" style={{fontSize:25,cursor:'pointer',color:'green'}}></i>
                </td>
              </tr>
              <tr>
                <td>Task 2</td>
                <td>
                  <i className='badge badge-danger'>incomplete</i>
                  <i className="fa fa-check ml-2" style={{fontSize:25,cursor:'pointer',color:'green'}}></i>
                </td>
              </tr> */}
            </tbody>
            <tfoot>
              {this.state.arrTask.filter(task => task.status).map(({ taskName, status }, index) => { //task = {status:false,taskName:'task'}
                return <tr key={index}>
                  <td>{taskName}</td>
                  <td>
                    <i className='badge badge-success'>complete</i>
                  </td>
                </tr>
              })}

            </tfoot>
          </table>
        </div>

      </div>
    )
  }
}

// function api(result = '') {

// }


// let promise1 = api('https://api...');
// let promise2 = api('https://api...');
// let promise3 = api('https://api...');

// Promise.all([promise1,promise2,promise3]).then(result=> {
//   promise4 = api('');

// })
