import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, loginWithGoogle, loginWithGithub } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from || '/';

    const handleLogin = event => {
        setError(null)
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset()
                toast.success('Successfully login!')
                navigate(from)
            })
            .catch(error => {
                setError(error.message)
                console.log(error)
            })
    }

    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                toast.success('Successfully login!')
                navigate(from)
            })
            .catch(error => console.log(error))
    }
    const handleLoginWithGithub = () => {
        loginWithGithub()
            .then(result => {
                toast.success('Successfully login!')
                navigate(from)
            })
            .catch(error => console.log(error))
    }
    const handleShowPass = ()=>{
        setShowPass(!showPass)
    }
    return (
       <section className='my-container my-20 '>
         <form onSubmit={handleLogin} className='mx-5 rounded-xl shadow-xl  md:w-1/2 md:mx-auto px-5 py-10 border-2 border-red-500'>
            <h4 className='text-red-500 text-2xl font-bold mb-5 text-center'>Sign in</h4>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Your Email</span>
                </label>
                <label className="">
                    <input type="email" name='email' placeholder='example@gmail.com' className='my-input' required />
                </label>
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text">Your Password</span>
                </label>
                <label className="relative">
                    <input type={showPass ? 'text' : 'password'} name='password' placeholder='*******' className='my-input'required />
                    <span>
                        {
                            showPass ? <EyeIcon onClick={handleShowPass} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeIcon>
                                : <EyeSlashIcon onClick={handleShowPass} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                        }
                    </span>
                </label>
            </div>
            <Link to='/reset-password' className=" btn-link text-error cursor-pointer normal-case" >Forgot password?</Link>
            <div className="form-control mt-4">
                <label className="flex gap-4 cursor-pointer">
                    <input type="checkbox" className="checkbox" />
                    <span className="">Remember me</span>
                </label>
            </div>
            <button className='my-btn w-full mt-5'>Sign in</button>
            <p className='text-error text-center mt-2'>{error}</p>
            <p className='text-center mt-2'>Don't have an account? <Link to='/register' className='text-red-500 underline'>Create an account</Link></p>

            {/* login with google and github */}
            <div className="divider">or signin with</div>
           <div className="flex justify-between gap-4 mt-2">
           <p onClick={handleLoginWithGoogle} className='btn-outlined w-full block text-center cursor-pointer'>Google</p>
            <p onClick={handleLoginWithGithub} className='btn-outlined cursor-pointer w-full block text-center '>Github</p>
           </div>
        </form>
       </section>
    );
};

export default Login;