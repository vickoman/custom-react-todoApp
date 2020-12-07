import React from 'react'
import { Link } from 'react-router-dom'

export default function SingUp() {
    return (
        <div className="container mx-auto border h-full flex justify-center">
            <div className="bg-white w-1/3 rounded-lg shadow-lg p-8 mt-28 h-auto mb-48">
                <h1 className="text-4xl text-center font-normal text-indigo-800 ">Sign Up</h1>
                <div>
                    <form className="form-horizontal w-3/4 mx-auto" >
                        <div className="flex flex-col mt-4">
                            <input type="text" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="firstName" placeholder="First Name:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="text" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="lastName" placeholder="Last Name:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="email" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="email" placeholder="Email:" required />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="text" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="username" placeholder="Username:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="password" className="flex-grow h-12 px-4 border rounded border-indigo-300 text-indigo-900" name="password" placeholder="Type your password:" />
                        </div>
                        <div className="flex flex-col mt-8">
                            <button className="bg-indigo-500 hover:bg-indigo-800 text-white text-sm font-semibold py-4 px-4 rounded">
                                Register
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-6">
                        <Link className="text-indigo-900 text-sm" to="/auth/login">
                            SignIn
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
