import getClient from "./GraphqlClient";

export const generalClient = getClient(
    process.env.REACT_APP_GRAPHQL_URL || ""
);