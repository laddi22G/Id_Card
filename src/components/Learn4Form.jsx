import React from "react";
import {useForm} from "react-hook-form"

function Learn4Form({Handleformsubmit}) {
const {register,handleSubmit,reset,watch} = useForm();
// console.log(data);
const Handleformsubmitdata = (data,e)=>{
    e.preventDefault(); 
    // e.preventDefault();
    
    console.log(data);
    const Name = watch("name");
    const Email = watch("email");
    console.log(Name);
    Handleformsubmit(data);
    reset();
    
    
}
    return (
        <div className="mt-5 justify-center flex ">

            <form className="flex gap-6"  onSubmit={handleSubmit(Handleformsubmitdata)}>
                <input {...register('name')} required className="rounded-md px-4 outline-none bg-white text-base font-semibold" type="text" placeholder="Name" />
                <input {...register('email')} required className="rounded-md px-4 outline-none bg-white text-base font-semibold" type="text" placeholder="email" />
                <input {...register('image')} required className="rounded-md px-4 outline-none bg-white text-base font-semibold" type="URL" placeholder="image URL" />
                <input className="bg-teal-600 py-1 px-8 font-semibold rounded-md" type="submit" />
            </form>
            
        </div>
        
    )

    
}

export default Learn4Form;
