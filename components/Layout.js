import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { MoralisProvider } from "react-moralis";

const Layout = ({ children }) => {
    return (
        <>
            <MoralisProvider initializeOnMount={false}>
                <Nav />
                <main>{children}</main>
                <Footer />
            </MoralisProvider>
        </>
    );
};

export default Layout;
