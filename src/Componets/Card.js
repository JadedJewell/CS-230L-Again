import React from "react";

function Card(text){
    return(
        <div class="card" className="card" style={{ width: '18rem' }}>
        <div className="card-body">
            <h5 className="card-title">{text.title}</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
    );
}
export default Card;


