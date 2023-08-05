

function Navbar() {
  return (
    <nav className="w-full bg-violet-300 h-16 global_navbar" style={{backgroundColor:"#af7eeb"}}>
        <span className="text-4xl m-auto ml-3 flex"><img src="form.png" className="h-12 mr-5"/><span className="hidden md:inline">Forms</span></span>
        <div className="flex gap-x-6 mr-6">
            <button className="create_button p-2">Create Form</button> 
            <button className="create_button p-2">Logout</button> 
        </div>
    </nav>
  )
}

export default Navbar