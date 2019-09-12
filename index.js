import React, { Component, useState,useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function Header(){
  const [name,setName]= useState('anuj');
  useEffect(()=>{
    new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('my new name');
      },10000); 
    }).then(response=>{
      setName(response);
    })
  })
 return (
   <>
   <h1>this is header</h1>
   <span>{name}</span> 
   <button onClick={()=> setName( name + 'sharmaa' )}>ClickMe</button>
   </>
 );
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Header />
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
