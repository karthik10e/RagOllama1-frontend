import axios from "axios"
import { useState } from "react"

function Register()
{
   const [data,setData]=useState(
   {
      username:"",
      email:"",
      password:""
   }) 
  const change=(e)=>
  {
     setData({...data,[e.target.name]:e.target.value})
  }
  const regSubmit= async()=>
  {
     const res =await axios.post("http://localhost:8080/register",data)
     console.log(res)
     alert(res.data)
  }
  return(
   <>
      <h3>hey iam registe</h3>
      <h4>my name is {data.username}</h4>
      <h4>my email is {data.email}</h4>
      <h4>my password is {data.password}</h4>
      <input onChange={change} name="username" placeholder="hey enter name"/><br/>
      <input onChange={change} name="email" placeholder="hey enter email"/><br/>
      <input onChange={change} name="password" placeholder="hey enter password"/><br/>
      <button onClick={regSubmit}>registe</button>
   </>
  )
}
export default Register