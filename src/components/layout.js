import React from "react";
import Hero from "../components/Hero";
import About from "./About";
import Sales from "./Sales";
import Advantages from "./Advantages";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    return (
        <main>
            <Navbar />
            <Hero/>
            <About/>
            <Sales />
            <Advantages />
            <Gallery />
            <Footer />
        </main>
    )
}

export default Layout;