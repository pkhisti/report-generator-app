import React, { Component } from 'react';
class  Header extends React.Component {
  render() {
        return(
        <header className="App-header">
            <div className="banner-img">
                <img src="stats.png" alt="stats banner"/>
            </div>
            <div className="banner">
                <h2 className="App-title">Fancy Report Generator</h2>
            </div>
        </header>
        );
    };
}
export default Header;