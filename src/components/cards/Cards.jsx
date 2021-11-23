import React from 'react'
import './cards.css'


function Cards(props) {
    const str = props.description;
    if(str===null)
        return null;
    const description = str.substr(0,200);
    return (
        <>
        
            <div className="card">
                <div className="card-title"><h4>{props.title}</h4></div>
                <div className="card-image">
                    <img src={props.urlToImage}></img>
                </div>
                <div className="card-content">{description}</div><a href={props.url}>Read more</a>
            </div>  
        </>
    )
}

export default Cards;
