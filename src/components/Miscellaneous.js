import React, { Component } from "react";

export default class Miscellaneous extends Component {
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://use.typekit.net/foobar.js";
    script.async = true;

    document.body.appendChild(script);
  }
  render() {
    var mapStyle = {
      width: "850px",
      height: "450px"
    };
    var imgMapStyle={
        display: "none"
    }
    return (
      <section id="miscellaneous" className="section section-text">
        <div className="animate-up ">
          <h2 className="section-title">Miscellaneous</h2>

          <div className="section-box">
            <p>
              <b>Extra Activities</b>
            </p>
            <li>
              <em>Support Student Examination Certification </em>, Aug. 2014
            </li>
            <li>
              <em>Critical Thinking Certification (Soft-skill)</em>, 2015
            </li>
            <br />
            <p>
              <b>Hobbies</b>
            </p>

            <ul className="interests-list">
              <li>
                <img src="./img/coding.png" alt="Coding"/>
                <span>Coding</span>
              </li>
              <li>
                <img src="./img/reading.png" alt="Reading"/>
                <span>Reading</span>
              </li>
              <li>
                <img src="./img/photographer.png"  alt="Photographer"/>
                <span>Photographer</span>
              </li>
              <li>
                <img src="./img/running.png" alt="Running"/>
                <span>Running</span>
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=nNjR0pTDebA">
                  <img src="./img/violin.png" alt="Violin"/>
                </a>
                <span>Violin</span>
              </li>
            </ul>
            <br />
            <p>
              "The World is a book and those who do not travel read only one
              page"
              <br />
            </p>
            <div id="mapdiv" style={mapStyle}></div>

            <a href="https://clustrmaps.com/site/16ypj" title="Visit tracker">
              <img
                src="//clustrmaps.com/map_v2.png?cl=ffffff&w=70&d=jMhatUyGljj-F6O16renrIyiOg6WI1d_No9H_eyUKo4&t=n&co=ffffff&ct=ffffff"
                alt="Map Style"
                style={imgMapStyle}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }
}
