import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider";

const SignUp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser} = useContext(AuthContext);
    const onSubmit = data =>{
      console.log(data);
      
        createUser(data.email, data.password)
        .then(result=>{
          const loggedUser = result.user;
          console.log(loggedUser);
          
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" {...register("name", {required:true})} name="name" placeholder="Name" className="input input-bordered" />
          {errors.name && <span className="text-red-500">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email", {required:true})} name="email" placeholder="email" className="input input-bordered" />
          {errors.email && <span className="text-red-500">Password must be 6 character</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",
          {
            required:true,
            minLength:6,
            maxLength:20,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_.]).{6,20}$/ 
             })} 
             name="password" placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'minLength' && <span className="text-red-500">This  must be 6 characters</span>}
          {errors.password?.type === 'pattern' && <span className="text-red-500">This  must have one uppercase, one lowercase, one number, and one special characters</span>}
          {errors.password?.type === 'maxLength' && <span className="text-red-500">This  must be less then 20 characters</span>}
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;