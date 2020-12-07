import React from 'react'

export default ({ children }) => {

    console.log('Auth Layour')

    return (
        <div className="bg-gray-200 h-screen">
            {children}
        </div>
    )
}
