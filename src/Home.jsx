import { Link } from "react-router-dom"
function Home()
{
   return(
    <>
      <h2>you are at home</h2>
      <Link to="/log">click to Login</Link>  <br/>
      <Link to="/reg">click to register</Link>
    </>
   )
}
export default Home