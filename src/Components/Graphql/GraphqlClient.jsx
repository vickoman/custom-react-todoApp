import { ApolloClient, createHttpLink } from "@apollo/client";
import { onError } from 'apollo-link-error';
import { setContext } from "apollo-link-context";

const errorHandlerLink = onError(({ graphQLErrors, networkError }) => {
    console.log('Apollo client Graphql error');
    Sentry.setTag('error_type', 'graphql_error');
    if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) =>{
        console.log('Apollo error message', message);
        });
    }
    if (networkError) {
        console.log('Apollo client network error', networkError);
    }
});


export default function getClient(endpoint) {
    const httpLink =createHttpLink({
        uri: endpoint
    });

    const tokenMidleware = setContext(_ => {
        const identityToken = localStorage.getItem("accessToken") || "";
        console.log(`Calling Graphql endpoint ${endpoint}`);
        return {
            headers: {
                Authorization: `Bearer ${identityToken}`,
            }
        };
    });

    const client = new ApolloClient({
        link: errorHandlerLink.concat(tokenMidleware).concat(httpLink),
        cache: new InMemoryCache()
    });

    return client;
}