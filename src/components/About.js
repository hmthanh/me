import React, { Component } from 'react'
// import {
//     Link
//   } from "react-router-dom";

export default class About extends Component {
    render() {
        var profileUniversityStyle = {
            padding:0,
            border: 0,
            margin: 0
        }
        return (
            <section id="about" className="section section-about">
                <div className="animate-up">
                    <div className="section-box">
                        <div className="profile">
                            <div className="row">
                                <div className="col-xs-5">
                                    <div className="profile-photo"><img src="img/awatar.png" alt="Hoang Minh Thanh" />
                                    </div>
                                    <div className="section-txt-btn">
                                        <p><a className="btn btn-lg btn-border ripple" rel="noopener noreferrer" target="_blank" href="file/Hoang_Minh_Thanh-CV.pdf">Resume</a></p>
                                    </div>
                                </div>
                                <div className="col-xs-7">
                                    <div className="profile-info">
                                        <div className="profile-preword"><span>Hi !</span></div>
                                        <h1 className="profile-title"><span>I'm</span> Minh-Thanh Hoang</h1>
                                        <div className="job-title">Machine Learning Engineer</div>
                                        <h2 className="profile-position"><strong>BS. Student</strong></h2>
                                        <h2 className="profile-university" style={profileUniversityStyle}>
                                            Computer Science at University of Science - VNU</h2>
                                        <br />
                                        <h2 className="profile-university"><strong>Interested field</strong> : Handwriting Recognition on Touch Screen, Object Detection and relate field</h2>
                                        <div className="ul-info">
                                            <a className="contact-item" href="tel:+84913472506">
                                                <i className="fa fa-lg fa-phone"></i> +84913472506
                                            </a>
                                            <a className="contact-item" href="mailto:hmthanhgm@gmail.com">
                                                <i className="fa fa-lg fa-envelope"></i> hmthanhgm@gmail.com
                                            </a>
                                            <a className="contact-item" href="skype:+hmthanhgm">
                                                <i className="fa fa-lg fa-skype"></i> hmthanhgm
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="profile-social">
                            <ul className="ul-info">
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/hmthanhgm">
                                        <i className="fa fa-lg fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://twitter.com/hmthanhgm">
                                        <i className="fa fa-lg fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/hmthanh/">
                                        <i className="fa fa-lg fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://github.com/hmthanh">
                                        <i className="fa fa-lg fa-github" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://medium.com/@hmthanh">
                                        <i className="fa fa-lg fa-medium" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="li-info">
                                    <a className="icon-info" rel="noopener noreferrer" target="_blank" href="https://stackoverflow.com/story/hmthanh">
                                        <i className="fa fa-lg fa-stack-overflow" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
