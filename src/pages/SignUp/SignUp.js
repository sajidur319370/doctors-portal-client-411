import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState(' ');
    const navigate = useNavigate();
    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(res => {
                const user = res.user;
                console.log(user);
                toast.success('User created Successfully.');
                const userInfo = { displayName: data.name }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                        window.location.reload();
                    })
                    .catch(error => console.log((error)));
            })
            .catch(error => {
                console.log(error);
                setSignUpError(error);

            });

        navigate('/')
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://doctors-portal-server-411.vercel.app/users', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <section className='my-16'>
            <h2 className='text-4xl font bold text-center'>Sign Up</h2>
            <div className='flex justify-center items-center'>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type='text' {...register("name", { required: "Name is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.name?.type === 'required' && <p className='text-red-600' role="alert">{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email?.type === 'required' && <p className='text-red-600' role="alert">{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password",
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: "It must be 6 or more character" },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]/,
                                    message: "It must contain at least one uppercase one lowercase and one numeric character one special character."
                                },

                            },
                        )} className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === 'required' && <p className='text-red-600' role="alert">{errors.password.message}</p>}
                        {errors.password?.type === 'minLength' && <p className='text-red-600' role="alert">{errors.password.message}</p>}
                        {errors.password?.type === 'pattern' && <p className='text-red-600' role="alert">{errors.password.message}</p>}
                    </div>
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    <input className='btn btn-accent w-full' type="submit" />
                    <p className='py-5'>Already have an account ? <Link to='/login' className='text-secondary font-medium'>Please Login</Link></p>
                    <div className="divider">OR</div>
                    <Link className='btn btn-outline btn-accent w-full'>Continue with Google</Link>

                </form>

            </div>
        </section>
    );
};

export default SignUp;