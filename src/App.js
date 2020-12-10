import React from "react";
import './assets/main.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Routers from './routes';

require('dotenv').config()

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  headers: {
    authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ5OThlLTI5NWItNGZjNi1hYTA3LWJhODYyNTg5NGY2ZCIsInVzZXJuYW1lIjoiY2FtaWxvbGEiLCJlbWFpbCI6ImNhbWlsb2xhQGdtYWlsLmNvbSIsImlhdCI6MTYwNzU2NTUwMywiZXhwIjoxNjA4MTcwMzAzfQ.vcam7vBlsnJjkhKotEhgPaWUiV1SB9spkTj4Yv_K0N4'
  },
  cache: new InMemoryCache()
});

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="antialiased font-sans h-scree">
        <Routers />
      </div>
    </ApolloProvider>
  );
}
