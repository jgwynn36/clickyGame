import React from "react";
import "./Wrapper.css";

const Wrapper = props => <div className = "wrapper"> {props.children} </div>;

export default Wrapper;





// import React from "react"; 
// import "./Wrapper.css"; 

// function Wrapper (props) {
//     return (
//         <header className = "header">
//             <h1>Cartoon Click Game! </h1>
//             <p>Click on an image to earn point, but don't click it twice</p>
//         </header>
//     )
// }; 

// export default Wrapper; 