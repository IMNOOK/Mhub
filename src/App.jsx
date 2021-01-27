import React from 'react';
import Header from './components/layout/header.jsx';
import Content from './components/layout/content.jsx';
import Footer from './components/layout/Footer.jsx';

class App extends React.Component{
  render(){
    return(
      <div className="">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}

export default App;
