import { Outlet, Navigate } from 'react-router-dom'
import Home from './pages/Home'

function Protected (){
    // let auth = {'token': false}
    let users = JSON.parse(localStorage.getItem('formData'))
    let auth = true
    return(
        auth ? <Home/> : <Navigate to="/login"/>
    )
}

export default Protected