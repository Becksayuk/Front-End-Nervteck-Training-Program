import React from 'react';
import './ImageCard.css'
//props pass data from the parent component to the child component

function ImageCard(props){
    const { name } = props
    const { description } = props
    const { rating } = props
    const { picture } = props
    return (
        <div className="Card">
    <h5>{name}</h5>
    <h5>{description}</h5>
    <h5>{rating}</h5>
    <h5>{picture}</h5>
    </div>
    );
}
export default ImageCard;
