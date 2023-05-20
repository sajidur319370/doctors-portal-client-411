import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const handleLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
            .catch(error => {

                setLoginError(error.message);
                console.log(error.message);
            });
    }

    return (
        <section className='my-16'>
            <h2 className='text-4xl font bold text-center'> Login</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                        {errors.email?.type === 'required' && <p className='text-red-600' role="alert">Email Address is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: true, minLength: 6 })} className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === 'required' && <p className='text-red-600' role="alert">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">Password Must be 6 character</p>}
                    </div>
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>
                    <input className='btn btn-accent w-full' type="submit" />
                    <p className='py-5'>New to doctors portal ? <Link to='/signup' className='text-secondary font-medium'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <Link className='btn btn-outline btn-accent w-full'>Continue with Google</Link>
                </form>
            </div>
        </section>

    );
};

export default Login;



