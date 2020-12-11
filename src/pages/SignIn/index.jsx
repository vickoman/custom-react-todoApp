import React from "react";
import { Link } from "react-router-dom";


export default () => (
    <div className="container mx-auto border h-full flex justify-center items-center">
        <div className="bg-white w-1/3 h-96 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl text-center font-normal text-indigo-800 ">Welcome to Tody</h1>
            <div>
                <form className="form-horizontal w-3/4 mx-auto" >
                    <div className="flex flex-col mt-8">
                        <input type="text" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="username" placeholder="Username:" />
                    </div>
                    <div className="flex flex-col mt-4">
                        <input type="password" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="password" placeholder="Type your password:" />
                    </div>
                    <div className="flex flex-col mt-8">
                        <button className="btn-auth-action">
                            Login
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <Link className="text-indigo-900 text-sm" to="">
                        Forgot your password?
                    </Link>
                </div>
                <div className="text-center">
                    <Link className="text-indigo-900 text-sm" to="/auth/register">
                        Create and account
                    </Link>
                </div>
            </div>
        </div>
    </div>
)
