import "../styles/globals.css";
import Header from "../components/Header";
import {
  getHuddleClient,
  HuddleClientProvider,
} from "@huddle01/huddle01-client";

import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export default function App({ Component, pageProps }) {
  const { chains, provider } = configureChains(
    [chain.polygonMumbai],
    [alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }), publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  const huddleClient = getHuddleClient(
    "052d7c4930885c3e9d837eb1e1eeab370465806b3315e96dc6afd9a734bc9068"
  );

  return (
    <>
      <div className="bg-gray-100">
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider theme={darkTheme()} chains={chains}>
            <HuddleClientProvider value={huddleClient}>
              <Header />

              <main className="bg-gray-100 h-screen container">
                <Component {...pageProps} />
              </main>
            </HuddleClientProvider>{" "}
          </RainbowKitProvider>
        </WagmiConfig>
      </div>
    </>
  );
}
