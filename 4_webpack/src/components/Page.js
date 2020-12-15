import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Footer from "./Footer";


function Page({info}) {
    let list = ["Home", "About","Contact"];
    let headertext = "Navigation bar";
    let footertext = "Copyright by Bogate Interfeisy Webowe";
    return (
        <React.Fragment>
            <Header info ={headertext}/>
            <Nav arr={list}/>
            <Article list ={info}/>
            <Footer info ={footertext}/>
        </React.Fragment>
    );
}

export default Page;