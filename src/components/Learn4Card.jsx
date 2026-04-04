import React from "react";
import Learn4Cards from "./Learn4Cards"

function Learn4Card({user,handleRemove}) {
    return (
        <div className="w-full max-h-100 overflow-auto  p-5 flex justify-center gap-5 flex-wrap">
        {
            user.map((item, index) => {
                return <Learn4Cards user={item} key={index} handleRemove={handleRemove} id={index}/>
            })
        }
    </div>
    )
}

export default Learn4Card;