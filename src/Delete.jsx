import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Delete()
{
    const navigate=useNavigate()
    const [data,setData]=useState(
        {
            username:localStorage.getItem("uname"),
            password:localStorage.getItem("upsw")
        }
    )
    const submit =async()=>
    {
        try
        {
           const res=await axios.post("http://localhost:8080/delete",data)
           console.log(res)
           alert("deleted")
           navigate("/")
        }
        catch(err)
        {
          alert(err.response.data)
          navigate("/log")
        }
    }
    return(
        <>
            <h2>delete your account</h2>
            <button onClick={submit}>delete</button>
        </>
    )
}
export default Delete