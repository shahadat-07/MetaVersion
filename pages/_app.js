import React from "react";
import { Provider } from "react-awesome-slider/dist/navigation";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import "../styles/fullpage.css";
import "../styles/layout.scss";
import "../styles/react-logo.scss";
import "../styles/startup.scss";
// import "../styles/content.scss";
import "../styles/globals.css";
import "../assets/pilat-narrow/stylesheet.css";
import "../assets/pilat-extended/stylesheet.css";

function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Provider slug={router.route}>
      <Head>
        <title>Next JS</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=0.8,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Fullpage navigation HOC with 3D animated transitions built on top of React Awesome Slider. GatsbyJS and NextJS recipes available."
        />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
