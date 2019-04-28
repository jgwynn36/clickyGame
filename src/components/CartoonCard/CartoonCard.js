import React from "react"; 
import "./CartoonCard.css"; 

const CartoonCard = props => {
    <div className="card" onClick={props.imageClick} >
    <div className="img-container">
    <img alt={props.image.replace(".jpg","")} src={requestAnimationFrame("../../images/" + props.image)} /> 
    </div>
    </div>
};

export default CartoonCard; 