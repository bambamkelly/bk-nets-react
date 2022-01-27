import React, { Component } from 'react';
import './App.css';
import GetLocalPosts from './components/LocalPosts/GetLocalPosts';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import "bootstrap/dist/css/bootstrap.min.css";



class App extends Component {
    render() {
        return (
            <>
                <Header />
                <Content/>
            <Footer/>
                </>

        );
    }
}

export default App;