import React, {Component} from "react";
import {Notifs} from 'redux-notifications';

import Header from "./Header";
import Footer from "./Footer"
import MainContent from "./MainContent";

export default class App extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <Notifs/>
                <Header/>
                <MainContent/>
                <Footer/>
            </div>
        );
    }
}