import React from "react";


function Learn4Cards({ user,handleRemove,id }) {
    return (
        <div className="w-45 h-full  bg-green-200 rounded-lg flex flex-col items-center p-3">
            <div className="image w-20 h-20 bg-sky-300 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover" src={user.image } alt="" />
            </div>
            <h1 className="font-semibold text-xl mt-2">{user.name}</h1>
            <h5 className="opacity-30 font-semibold text-sm">{user.email}</h5>
            <p className="text-xs  text-center mt-1 font-semibold tracking-tight leading-3.5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem placeat sunt quos.</p>
            <button onClick={()=>handleRemove(id)} className="py-1 px-4 bg-red-600 mt-3 rounded-full text-amber-50 text-sm">Remove it</button>
        </div>
    )
}
export default Learn4Cards