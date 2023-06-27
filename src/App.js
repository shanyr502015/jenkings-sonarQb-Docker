import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from  './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Stylesheet/>
      {/*<NameList/>*/}
      {/*<UserGreeting/>>*/}
      {/*<ParentComponent/>*/}
      {/*<EventBind/>*/}
      {/*<ClassClick/>*/}
      {/*<FunctionClick/> */}
      {/*<Counter/>*/}
      {/*<Message/>*/}
        {/*<Greet name="Bruce" heroName="Batman" />
        <p>This is children props</p>
        <Greet name="Clark" heroName="Superman"/> 
        <button>Action</button>
        <Greet name="Diana" heroName="Wonderwomen"/>*/}
        {/*<Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/> 
        <Welcome name="Diana" heroName="Wonderwomen"/>*/}        
      {/*<Hello/>*/} 
      </div>
    );
  }
}
export default App;