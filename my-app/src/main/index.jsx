import React, { Component } from "react";
import Content from "../components/Contents/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slide from "../components/Slide";

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <Slide />
        <Content />
        <Footer />
      </>
    );
  }
}
export default Index;
