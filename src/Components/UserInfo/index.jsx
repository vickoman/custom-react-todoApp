import React from 'react'
import { Link } from 'react-router-dom'

const  UserInfo = (props) => {
    return (
        <div className="flex p-5">
            <img className="w-16 rounded-full" src="https://anydo-profile-pictures.s3.amazonaws.com/3affc658-79de-497d-a2a3-b5d091f4dec9" alt="Vcitor Diaz"/>
            <figcaption className="font-medium ml-2 pt-2">
                <div className="text-indigo-900 font-semibold">
                    {`${props.data.firstName} ${props.data.lastName}`}
                </div>
                <div className="text-gray-500  font-light">
                    {props.data.username}  <Link to="/auth/login" className="text-base text-indigo-600">[ Logout ]</Link> 
                </div>
            </figcaption>
        </div>
    )
}

export default UserInfo
