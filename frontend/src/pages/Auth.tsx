import { useState, ChangeEvent } from "react"


export default function Auth() {

  const [formstate, setFormState] = useState<'REGISTER'|'LOGIN'>('REGISTER');

  const [formdetails, setFormdetails] = useState({
    email:"",
    password:""
  })

  const [confirmpass, setConfirmpass] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    console.log(e.target.name);
    setFormdetails({...formdetails, [e.target.name]:e.target.value})
  }

  const handleSubmit = async()=>{
    console.log("submitted");
  }

  return (
    <div className="h-screen max-h-screen overflow-hidden flex justify-around flex-col items-center">
      {formstate==='REGISTER'?
        <form className="w-full max-w-sm">
          <div className="text-center flex justify-center mb-8 items-center">
            <img src="form.png" className="h-16"/>
            <h2 className="items-center ml-5 text-xl font-bold">FormWizard</h2>
          </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="email" value={formdetails.email} onChange={handleChange}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" name="password" value={formdetails.password} onChange={handleChange}/>
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-gray-500 font-bold md:text-right mb-1 pr-4">
            Confirm Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" name="confirmpass" value={confirmpass} onChange={(e)=>{setConfirmpass(e.target.value)}}/>
        </div>
      </div>
      <h3 className='flex mt-5 text-gray-700 justify-center mb-4'><span>Already have an account? <button className='text-sky-500' onClick={(e)=>{e.preventDefault();setFormState('LOGIN');setFormdetails({email:"", password:""})}}>Signin</button></span></h3> 

      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
            Sign Up
          </button>
        </div>
      </div>
    </form>
    :
    
    <form className="w-full max-w-sm">
          <div className="text-center flex justify-center mb-8 items-center">
            <img src="form.png" className="h-16"/>
            <h2 className="items-center ml-5 text-xl font-bold">FormWizard</h2>
          </div>
<div className="md:flex md:items-center mb-6">
  <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
      Email
    </label>
  </div>
  <div className="md:w-2/3">
    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name="email" value={formdetails.email} onChange={handleChange}/>
  </div>
</div>
<div className="md:flex md:items-center mb-6">
  <div className="md:w-1/3">
    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
      Password
    </label>
  </div>
  <div className="md:w-2/3">
    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" name="password" value={formdetails.password} onChange={handleChange}/>
  </div>
</div>


<h3 className='flex mt-5 text-gray-700 justify-center mb-4'><span>Don't have an account? <button className='text-sky-500' onClick={(e)=>{e.preventDefault();setFormState('REGISTER'); setFormdetails({email:"", password:""})}}>Signup</button></span></h3> 

<div className="md:flex md:items-center">
  <div className="md:w-1/3"></div>
  <div className="md:w-2/3">
    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleSubmit}>
      Sign In
    </button>
  </div>
</div>
</form> 
    
    }
</div>
  )
}