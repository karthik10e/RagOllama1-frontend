import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import UserDashboard from "./UserDashboard"
import Update from "./Update"
import Delete from "./Delete"

function App()
{
    return(      //      http://localhost:3000/register
      <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
           <Route path="/reg" element={<Register/>}/>
           <Route path="/log" element={<Login/>}/>
           <Route path="/dboard" element={<UserDashboard/>}/>
           <Route path="/update" element={<Update/>}/> 
           <Route path="/del" element={<Delete/>}/>
       </Routes>
    </BrowserRouter>
    )
}
export default App