import React from "react";
import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import About from "./components/About";
import News from "./components/News";
import Experience from "./components/Experience";
import Accomplishments from "./components/Accomplishments";
import Miscellaneous from "./components/Miscellaneous";
import Footer from "./components/Footer";
import Education from "./components/Education";
import { ArrowAltCircleUp } from './components/Icon'

function App() {
  return (
    <div className="App">
      <MobileNav></MobileNav>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <div className="container">
            <About></About>
            <News></News>
            <Education></Education>
            <Experience></Experience>
            <Accomplishments></Accomplishments>
            <Miscellaneous></Miscellaneous>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <a className="btn-scroll-top" href="index.html#">
        <ArrowAltCircleUp />
      </a>
    </div>
  );
}

export default App;
