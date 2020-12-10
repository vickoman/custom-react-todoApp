import React from "react";

const ListRaw = (props) => {
    const {loading, error, data} = props;
    if (loading) return <p>Loading...</p>
    if (error) return <p className="text-xs text-red-800">{error.message}</p>
    return (
        <ul>
            {data.lists.map((list) => (
                <li
                    className="item-lista"
                    key={list.id}>
                    {list.name}
                        <span  className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">{list.comments.length}</span>
                </li>
            ))}
        </ul>
    );
}
export default ListRaw;