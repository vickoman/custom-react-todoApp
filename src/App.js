import React from "react";
// import { TodoApp } from "./Components/TodoApp";
import './assets/main.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { Lista } from "./Components/Lista";
require('dotenv').config()

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App pt-2">
        {/* <TodoApp /> */}
        {/* <Lista /> */}
      </div>
    </ApolloProvider>
  );
}
