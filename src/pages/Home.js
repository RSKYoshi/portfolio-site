// import logo from "../logo.svg";
// import React from "@types/react";
// import React from 'react';
// import logo from '/src/logo.svg';
// import '../App.css'
// import './App.css';
import React, {Component} from 'react';
import "../styling/Home.css";


export class Home extends Component{
    render() {
        return (
            <div className="homePage">
                <header>
                    {/*<img src={logo} className="App-logo" alt="logo" />*/}
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="div1">Home Page!!!</div>
                        <div>Things here</div>


                    </a>
                </header>
            </div>
        );
    }
}



