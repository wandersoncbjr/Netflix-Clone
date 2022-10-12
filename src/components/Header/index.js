import React from "react";
import './index.css'

export default () => {
    return (
        <header className="preto">
            <div className="logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
            </a>
            </div>
           
            <div className="usuario">
                <a href="/">
                    <img src="https://i.pinimg.com/550x/e3/94/30/e39430434d2b8207188f880ac66c6411.jpg" alt="usuario"/>
                </a>
            </div>
        </header>
    );


}