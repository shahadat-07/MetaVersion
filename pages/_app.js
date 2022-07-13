import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/fullpage.css";
import "../styles/layout.scss";
import "../styles/globals.css";
import "../assets/pilat-narrow/stylesheet.css";
import "../assets/pilat-extended/stylesheet.css";
import { MoralisProvider } from "react-moralis";
import { NotificationProvider } from "web3uikit";

function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <MoralisProvider initializeOnMount={false}>
            <NotificationProvider>
                <Provider slug={router.route}>
                    <Head>
                        <title>My Verse</title>
                        <meta
                            name="viewport"
                            content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
                        />
                        <meta name="description" content="My Verse" />
                        <link rel="shortcut icon" href="/static/favicon.ico" />
                    </Head>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </Provider>
            </NotificationProvider>
        </MoralisProvider>
    );
}

export default App;
