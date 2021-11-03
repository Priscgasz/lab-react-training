import React from 'react';
import IdCard from './components/idCard';
import Greetings from './components/greetings';
import Random from './components/random';
// import BoxColor from './components/boxColor';
import './App.css';

    

const user0 = { 
  lastName: "Gasz", 
  firstName: "P", 
  gender:"female", 
  height:180, 
  birth:new Date("1993-07-10"), 
  picture:"https://randomuser.me/api/portraits/women/44.jpg"
};

  
function App() {
  return ( 
    <div className="App">
      <IdCard user= {{firstName: 'Ellie'}} />
      <IdCard user= {user0} />

      <Greetings lang="de">Ludwig</Greetings>
      <Greetings lang="fr">François</Greetings>
      <Greetings lang="en">John</Greetings>


      <Random min={1} max={6}/>
      <Random min={1} max={100}/>
    </div>
  );
}

export default App;
