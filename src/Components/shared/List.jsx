import React from "react";
import { gql, useQuery } from "@apollo/client";

const QUERY_LIST = gql`
    query QUERY_LIST{
        lists {
            id
            name
            comments {
                id
                comment
            }
            author {
                id
            }
            created
            updated
        }
    }
`;

const ListRaw = (props) => {
    const {loading, error, data} = useQuery(QUERY_LIST);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    return (
        <ul>
            {data.lists.map((list) => (
                <li 
                    className="item-lista">
                    {list.name}
            <span className="bg-gray-200 rounded-full p-1 ml-1 text-xs text-gray-600 font-semibold">{list.comments.length}</span>
                </li>
            ))}
        </ul>
    );
}
export default ListRaw;