// import React, {Component} from 'react';
import '../styling/Contact.css';
import yoshiProfilePic from '../img/ryan.png'
import emailjs from '@emailjs/browser';
import React, {Component, useRef} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {REACT_APP_SITE_KEY} from "../constants/api-keys";
// import {logDOM} from "@testing-library/react";
// import REACT_APP_SITE_KEY from 'api-keys.js'
// import {render} from "react-dom";



// export class Contact extends Component{


export const Contact = () => {

        function btnAction(){
            // TODO: need to target button using virtual DOM for a sweet css effect.
        //    onclick, make button look like it got pressed, then reset to original style
        //    onclick, activate
            const submitButton = document.getElementById("submitButton");
            submitButton.style.boxShadow = 'inset 0px 9px 15px 0px black';
            submitButton.style.border = '1px solid black'
            submitButton.style.boxShadow = 'inset 0px 9px 15px 0px black';
        }

        function btnAction2(){
            const submitButton = document.getElementById("submitButton");
            submitButton.style.boxShadow = 'inset 0px -4px 15px 0px black';
        }


        class App extends Component {
            constructor(props) {
                super(props);
                this.recaptchaLoaded = this.recaptchaLoaded.bind(this);
                // this.activateSubmitButton = this.activateSubmitButton.bind(this);
                this.state = {
                    isVerified: false
                }
            }
        }
        async function activateSubmitButton(){
            if(this.state.isVerified){
                let submitBtn = document.getElementById("submitButton")
                submitBtn.setAttribute("disabled","")
            }
        }


        const form = useRef();
        const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('emailJS_API', 'template_v1', form.current, '2t7z2dIDEmHxJdPXm')
                .then((result) => {
                    console.log(result.text);
                    console.log("message sent");
                    e.target.reset();
                }, (error) => {
                    console.log(error.text);
                });
        };
        return (
            // <div id="contact-background">
            <div id="contact-background">
            <main id="main-container">
                    <div id="infoContainer">
                        {/*<div id="container-etc"></div>*/}
                        <form ref={form} onSubmit={sendEmail}>
                            <div id="outer-profile-img-box">
                                <div id="profile-img-box">
                                    <img id="yoshi-img" src={yoshiProfilePic} alt="img" />
                                </div>
                            </div>

                            <br/><br/>
                            <div id="about-me-text">
                                Hi There! Send me an email and I will get right back to you. <br/> Mahalo!
                            </div>
                            <br/><br/>
                            <div id="email-container">
                                <span>
                                    <label htmlFor="name">Name </label>
                                    <input className="input-form-lengths" type="text" name="visitor_name"/>
                                </span>
                                    <br/><br/>
                                    <span>
                                    <label htmlFor="email">Email &nbsp;</label>
                                    <input className="input-form-lengths" type="text" name="visitor_email"/>
                                </span>
                                    <br/><br/>
                                    <span>
                                    <label htmlFor="message">Message &nbsp;</label>
                                    <textarea id="message-area" name="message"/>
                                </span>
                                    <br/><br/>
                                {/*<reCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY}/>*/}
                                <ReCAPTCHA
                                    id="recaptcha"
                                    // onclick={this.activateSubmitButton}
                                    // sitekey= "6LdDFbUjAAAAAHCwJxhL-7sNqEOW_mg7-evxqGKj"
                                    // sitekey={REACT_APP_SITE_KEY}
                                    sitekey={process.env.REACT_APP_SITE_KEY}
                                    render="explicit"
                                />
                                <span id="submit-button-wrapper">
                                    <input id ="submitButton" onMouseDown={btnAction} onMouseUp={btnAction2} type="submit" disabled=""/>
                                </span>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
    )
    }


