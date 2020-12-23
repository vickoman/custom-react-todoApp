import { useApolloClient } from "@apollo/client";
import {  useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { loginUser } from "./mutation";

export default () => {
    const apolloClient = useApolloClient();

    const authenticateUser = async ({email, password}) => {
        console.log(email);
        const result = await apolloClient.mutate({
            mutation: loginUser,
            variables: {
                UserLoginInput: {
                    email,
                    password
                }
            }
        });
        return result.data;
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values) => {
            await authenticateUser(values)

        }
    })
    return (
        <div className="container mx-auto border h-full flex justify-center items-center">
            <div className="bg-white w-1/3 h-96 rounded-lg shadow-lg p-8">
                <h1 className="text-4xl text-center font-normal text-indigo-800 ">Welcome to Tody</h1>
                <div>
                    <form className="form-horizontal w-3/4 mx-auto" onSubmit={formik.handleSubmit} >
                        <div className="flex flex-col mt-8">
                            <input type="email"
                                className="input-auth-form"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                placeholder="Email:" />
                        </div>
                        <div className="flex flex-col mt-4">
                            <input type="password"
                                    className="input-auth-form"
                                    name="password"
                                    id="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                    placeholder="Type your password:" />
                        </div>
                        <div className="flex flex-col mt-8">
                            <button className="btn-auth-action" type="submit">
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
    );
}
