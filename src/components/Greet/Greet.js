import React from 'react';

//как импортиррвать стили 
import './Greet.css'

//! 1 method to get props from parent component
// export const Greet = (props) => {
//     console.log(props.name)
//     return (
//         <div className="greetings">
//             <h1>Hello {props.name} {props.lastName}</h1>
//             {props.children}
//         </div>
//     );
// };

//! 2 способ деструктуризация
// export const Greet = ({name, lastName, children}) => {
//     console.log(name)
//     return (
//         <div className="greetings">
//             <h1>Hello {name} {lastName}</h1>
//             {children}
//         </div>
//     );
// };


//! Sending values to App.js
export const Greet = (props) => {
    props.getData('hi britney bitch')
    return (
        <div>
           <input
              onChange={(e) => {
                  props.getData(e.target.value)
              }} 
              type="text"
           /> 
        </div>
    );
};


// export default Greet;