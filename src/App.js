import React, {Component} from 'react';
import './style/index.css';
import Header from './Components/header'
import Footer from './Components/footer'
import Main from './Components/main'
import Data from './Components/Prod.json'

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      DB:Data
    }
  }
    
  render(){
    return(
      <>
        <Header 
          logo="Z"
          home="Home"
          menu="Menu"
          about="About"
          social="Coonect"
        />
        <Main Prod={this.state.DB}/>
        <Footer
         developer="Zahid"
         year="2023"
        />
      </>
    );
  };
};

export default App;
