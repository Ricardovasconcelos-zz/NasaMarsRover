import React, { Component } from 'react';


import Main from './pages/main/Main'
import Header from './components/header/Header'
import Image from './components/img/Image'
import About from './components/about/About'
import Info from './components/info/Info'
import ShowBackground from './components/showbackground/ShowBackground'
import Footer from './components/footer/Footer'
 class App extends Component {
  render() {
    return(
      <div className="App">
        <Header/>
       <Image/>
        <About/>
        <Info/>
        <ShowBackground/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}

export default App