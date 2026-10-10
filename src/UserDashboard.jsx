import axios from "axios"
import { use, useState } from "react"
import { Link } from "react-router-dom"

function UserDashboard()
{
   const [viewall,setViewAll]=useState([])
   const [getdata,setGetData]=useState()
   const [name,setName]=useState("")
   const [view,setView]=useState()
   const [data,setData]=useState(
      {
         username:localStorage.getItem("uname"),
         password:localStorage.getItem("upsw")
      }
   )
   const viewdata=()=>
   {
       setView(1)
   }
   const change=(e)=>
   {
       setName(e.target.value)
   }
   const getdetails=async()=>
   {
     try//http://localhost:8080/register?username="charan"&email="charan1234@gmail.com"
     {
      //  const res= await axios.get(`http://localhost:8080/getdata?username=${name}`)
       const res= await axios.get(`http://localhost:8080/getdata?username=${name}`)
       console.log(res)
       setGetData(res.data)
     }
     catch(err)
     {
        console.log(err.response.data)
     }
   }
   const getalldata=async()=>
   {
     const res=await axios.get("http://localhost:8080/getalldata")
     console.log(res)
     setViewAll(res.data)
   }
   return(
    <>
       <h1>hey {localStorage.getItem("uname")}</h1>
       <Link to="/update">update password</Link> <br/>
       <Link to="/del">delete account</Link><br/>
       <button onClick={viewdata}>view data</button><br/>

       <input onChange={change} placeholder="enter username"/>
       <button onClick={getdetails}>get details</button>

       <button onClick={getalldata}>get all data</button>

       { view && <div> <p>name: {data.username}</p> <p>password: {data.password}</p></div>  }

       {getdata && <div> <p>name: {getdata.username}</p> <p>email: {getdata.email}</p> <p>password: {getdata.password}</p></div> }

       {viewall.length>0 && (   
                   
                     viewall.map((abc)=>(
                        <div>
                              username:<p>{abc.username}</p>
                              email:<p>{abc.email}</p>
                              password:<p>{abc.password}</p>
                        </div>
                     )))
                   
       }
    </>
   )
}
export default UserDashboard