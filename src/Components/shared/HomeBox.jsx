import React from 'react'

const HomeBox = (props) => {
    return (
        <div className="mt-8 px-4">
            <h3 className="sidebar-title">{props.title}</h3>
            {props.children}
        </div>
    )
}

export default HomeBox
