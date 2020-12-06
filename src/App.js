import React from "react";
import './assets/main.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routers from './routes';

require('dotenv').config()

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App pt-2">

        <Routers />
      </div>
    </ApolloProvider>
  );
}
