import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SingUp() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: ""
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <div className="container mx-auto border h-full flex justify-center">
            <div className="bg-white w-1/3 rounded-lg shadow-lg p-8 mt-28 h-auto mb-48">
                <h1 className="text-4xl text-center font-normal text-indigo-800 ">Sign Up</h1>
                <div>
                    <form className="form-horizontal w-3/4 mx-auto" onSubmit={formik.handleSubmit} >
                        <div className="flex flex-col mt-4">
                            <input 
                                type="text" 
                                className="input-auth-form" 
                                name="firstName" 
                                id="firstName"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                                placeholder="First Name:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input 
                                type="text" 
                                className="input-auth-form" 
                                name="lastName" 
                                id="lastName"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                placeholder="Last Name:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input 
                                type="email" 
                                id="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className="input-auth-form" 
                                name="email" 
                                placeholder="Email:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="text" 
                                className="input-auth-form"
                                name="username" 
                                id="username"
                                onChange={formik.handleChange}
                                value={formik.values.username}
                                placeholder="Username:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="password" 
                                id="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                className="input-auth-form" name="password" placeholder="Type your password:" />
                        </div>
                        <div className="flex flex-col mt-8">
                            <button type="submit" className="btn-auth-action">
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
