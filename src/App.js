
import './App.css';
// 1 способ экспортировать
// import Greet from './components/Greet/Greet';

// function App() {
//   return (
//     <div>
//       <Greet />
//     </div>
//   );
// }

// export default App;

// 2 способ 
import React from 'react';
import {Greet} from './components/Greet/Greet';

// const App = () => {

//   return (
//     <div>
//       <Greet name="Peri" lastName="Onolbekova">
//         <button>Like</button>
//       </Greet>
//       <Greet name="Satina" lastName="Taalaibekova">
//         <p>FullStuck Developer</p>
//       </Greet>
//     </div>
//   );
// };

//! Getting values from Greet.js

const App = () => {

  // create a function 
  const getData =(value) => {
    console.log(value)
  }
  //send props to child el
  return (
    <div>
      <Greet getData={getData}/>  
    </div>
  );
};



export default App;


//! without JSX
// function App() {
//   return React.createElement
//    ( 'div',
//     {id: 'makers'},
//      React.createElement ('h1', null, 'Makers Bootcamp'))
// }

