import React from "react";

const BoxWithBorderCustom = (props) => {
    return (
        <div className={`mt-1 mb-1 w-80 border-${props.color ? props.color : 'gray'}-200 border rounded p-2`}>
            {props.children}
        </div>
    );
}
export default BoxWithBorderCustom;