import React, { Component } from 'react';
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
    render() {
        return (

            <div className="Header">
                <div className="topnav">
                <a href="#">
                        <img src="" /> < b > Brooklyn Nets </b> </a>
                    <a href="#subscribe" > Subscribe </a>
                    <a href="#roster"> Roster </a >
                    <a href="#gallery" > gallery </a>
                    <a href="#coaching"> Coaching Staff </a >
                     </div>
            </div>




        );
    }
}
export default Header;