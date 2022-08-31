import "../styles/globals.css";
import type { AppProps } from "next/app";
import { client } from "../Apollo_client";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component client={client} {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
