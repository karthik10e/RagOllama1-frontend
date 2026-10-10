import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Update()
{
    const navigate=useNavigate();
     const [data,setData]=useState(
       {
          username:localStorage.getItem("uname"),
          password:localStorage.getItem("upsw"),
          npassword:""
       }) 
      const change=(e)=>
      {
         setData({...data,[e.target.name]:e.target.value})
      }
      const update=async()=>
      {
          try
          {
            const res=await axios.post("http://localhost:8080/update",data)
            console.log(res)
            alert(res.data)
            navigate("/dboard")
          }
          catch(err)
          {
            console.log(err.response)
            navigate("/update")
          }
      }
   return(
    <>
        <h3>hey iam Update page</h3>
        <input onChange={change} name="npassword" placeholder="enter new password"/>
        <button onClick={update}>update</button>
    </>
   )
}
export default Update