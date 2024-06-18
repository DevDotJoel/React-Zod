import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {z} from 'zod';

const schema=z.object({
    email:z.string().email(),
    password:z.string().min(8),
})

type FormFields=z.infer<typeof schema>;

export type LoginFormProps={
    submit:(data:FormFields)=>void
}
export const LoginForm= ({submit}:LoginFormProps) => {

    const{register,handleSubmit,setError,formState:{errors}}=useForm<FormFields>({
        defaultValues:undefined,
        resolver:zodResolver(schema)
    })
  return (
   <>
   
    <div className="row mt-5 d-flex justify-content-center">
        <div className="col col-6">
        <form onSubmit={handleSubmit(submit)}>
        <div className="row mt-5">
        <div className="col ">
            <h1>Sign In</h1>
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className={`form-control ${errors.email?"is-invalid":""}` }{...register("email")}/>
        {errors.email && (
              <span className="invalid-feedback d-block">
                {errors.email.message}
              </span>
            )}
        </div>
    </div>
    <div className="row mt-2">
        <div className="col">
        <label htmlFor="password" className="form-label">Email</label>
        <input type="password" className={`form-control ${errors.password?"is-invalid":""}` } {...register("password")}/>
        {errors.password && (
              <span className="invalid-feedback d-block">
                {errors.password.message}
              </span>
            )}
        </div>
    </div>
    <div className="row mt-4 ">
        <div className="col">
        <button className="btn btn-secondary w-100">Sign in</button>
        </div>
       
        </div>
  
    </form>
        </div>
    </div>

   </>
  )
}
