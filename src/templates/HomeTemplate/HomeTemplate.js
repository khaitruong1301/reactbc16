import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import HeaderHome from '../../Component/HeaderHome/HeaderHome'
import Home from '../../pages/Home/Home'





export default function HomeTemplate(props) { //{path:'/home', component:Home}

    const [screen,setScreen] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    useEffect(()=>{
        //Bắt sự kiện thay đổi kích thước màn hình
        window.onload = ()=>{
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.onresize = () => {
            setScreen({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        //Xoá 2 sự kiện onload và onresize nếu người dùng chuyển template
        return () => {
            window.removeEventListener('onload');
            window.removeEventListener('onresize');

        }
    },[])
    //Mặc định Component là props.component
    let Component = props.component;
    if(props.componentMobile) { //nếu có component mobile thì sẽ xem kích thước để gán lại component
        if(screen.width <= 765) {
            Component = props.componentMobile;
        }

    }


    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return <div>
                <HeaderHome />
                 <Component {...propsRoute} />
                <footer className='text-center p-5 bg-dark text-white'>Footer @cybersoft</footer>

            </div>

        }} />
    )
}
