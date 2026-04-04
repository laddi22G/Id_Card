 import { useState } from "react";
import Learn4Card from "./components/Learn4Card"
import Learn4Form from "./components/Learn4Form"

function App() {
  const [user, setuser] = useState([])

  const Handleformsubmit=(data)=>{
    // console.log(data)
     setuser((prevUsers) => [...prevUsers, data]);
  } 
  const handleRemove =(id)=>{
    console.log(id)
setuser((prev)=>prev.filter((item,index)=>index !=id))
  }

  return <div className="w-full h-screen items-center justify-center bg-zinc-300  flex">
    <div className="container mx-auto">
      <Learn4Card user={user} handleRemove={handleRemove}/>
       <Learn4Form Handleformsubmit={Handleformsubmit}/>
    </div>
    
  
  </div>
}

export default App;
