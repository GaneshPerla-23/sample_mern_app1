import { useNavigate, userNavigate } from "react-router-dom"
function HrHome(){
    let currentuser=localStorage.getItem("currentuser")
    let navigate=useNavigate()
    let handlelogout=(e)=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    return(
        <div>
        <h1>Hr home</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>)
}
export default HrHome