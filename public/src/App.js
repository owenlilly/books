import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Breadcrumbs from './components/Breadcrumbs';
import MainPage from './pages/MainPage';
import BookPage from './pages/BookPage';
import LoginPage from './pages/LoginPage';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Header/>
        <Breadcrumbs/>
        <MainPage/>
        {/* <BookPage/> */}
        {/* <LoginPage/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
