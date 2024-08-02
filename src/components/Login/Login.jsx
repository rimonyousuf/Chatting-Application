import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <>
            <div className='background'>
                    <div className="hero-content w-full m-auto lg:flex">
                        <div className="card w-1/2 max-w-sm mt-24 py-8 shadow-2xl bg-base-100">
                            <h2 className="text-4xl text-center font-bold mt-3">Login</h2>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn w-3/4 mx-auto btn-primary font-bold" type="submit" value="Login" />
                                </div>
                            </form>
                            <p className='mx-auto mb-3'><small>Don't have account?<Link to="/signup" className='text-red-800'>Sign up here</Link></small></p>
                        </div>
                    </div>
            </div>
        </>
    );
};

export default Login;