import React from "react";
import { useForm } from "react-hook-form";
export function UseFormHandling(){
    const {register,handleSubmit,reset,formState:{errors}}=useForm({
        defaultValues:{
            userName:"manikant",
        }
    });
    const onSubmission=(data)=>{
        console.log(data);
        alert('login successfully');
        reset();
    };
return(
    <div>
<form onSubmit={handleSubmit(onSubmission)}>
<input type="text" placeholder="enter name" {...register("userName",{
    required:"username is required"
})}/>
{
    errors.userName && <p> {errors.userName.message} </p>
}

<input type="password" placeholder="enter password" {...register("userPassword",{
    required:"password is required",
      minLength: {
            value: 6,
            message: "Min 6 characters"
          }
})}/>
{
    errors.userPassword && <p> {errors.userPassword.message} </p>
}
<button type="submit">Submit</button>
</form>
    </div>
)
}