import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import PrivateRoute from "./Privateroute"

const Allroutes = ()=>{


    return(
        <Routes>

            <Route path="/" element={
                <PrivateRoute><Home/></PrivateRoute>
            }></Route>


            <Route path="/login" element={<Login/>}></Route>


            <Route path="/register" element={<Register/>}></Route>


        </Routes>
    )
}

export default Allroutes;