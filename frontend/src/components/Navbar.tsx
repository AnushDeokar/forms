import { useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.clear();
    navigate("/login");
  }
  return (
    <nav className="w-full bg-violet-300 h-16 global_navbar" style={{backgroundColor:"#af7eeb"}}>
        <span className="text-4xl m-auto ml-3 flex"><img src="form.png" className="h-12 mr-5"/><span className="hidden md:inline">Forms</span></span>
        <div className="flex gap-x-6 mr-6">
            <button className="create_button p-2" onClick={()=>navigate("/createform")}>Create Form</button> 
            <button className="create_button p-2" onClick={handleLogout}>Logout</button> 
        </div>
    </nav>
  )
}

export default Navbar