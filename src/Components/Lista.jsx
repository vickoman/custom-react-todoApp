import { gql, useQuery } from "@apollo/client";
import React from "react";

const QUERY_LIST = gql`
    query QUERY_LIST{
        lists {
            id
            name
        }
    }
`;
export function Lista() {
    const {loading, error, data} = useQuery(QUERY_LIST);
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>
    return (
        <div>
            {data.lists.map((list) => (
                <div key={list.id}>{list.name}</div>
            ))}
        </div>
    );
}
