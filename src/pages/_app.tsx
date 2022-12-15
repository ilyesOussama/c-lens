import "../styles/globals.css";
import type { AppProps } from "next/app";

import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "next-themes";

import { client } from "./api/api";

const wagmiClient = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={client}>
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}
