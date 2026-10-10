import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Login()
{
   const navigate=useNavigate()
   const [data,setData]=useState(
   {
      username:"",
      password:""
   }) 
  const change=(e)=>
  {
     setData({...data,[e.target.name]:e.target.value})
  }
  const logSubmit=async()=>
  {
    try
    {
       const response=await axios.post("http://localhost:8080/login",data)
       console.log(response)
       localStorage.setItem("uname",response.data.username)
       localStorage.setItem("upsw",response.data.password)
       navigate("/dboard")
    }
    catch(err)
    {
       console.log(err.response)
       navigate("/log")
       alert(err.response.data)
    }
  }
  return(
   <>
      <h3>hey iam Login</h3>
      <h4>my name is {data.username}</h4>
      <h4>my password is {data.password}</h4>
      <input onChange={change} name="username" placeholder="hey enter name"/><br/>
      <input onChange={change} name="password" placeholder="hey enter password"/><br/>
      <button onClick={logSubmit}>login</button>
   </>
  )
}
export default Login