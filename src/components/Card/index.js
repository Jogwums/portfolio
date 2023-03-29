import React from 'react';

// styling


const Card = ({image, text, link, text2}) => {
    return (
    <>
    <section className="mx-auto" id="scroll">
            <div className="card rounded-lg" style={{width: "18.5rem", background:"transparent", border: "none"}}>
            <a href={link} target="_blank" rel="noreferrer">
            <img className="card-img-top rounded-lg" src={image} alt="..." />
            {/* <img className="card-img-top " src={image} alt="..." /> */}
            </a>
            <div className="card-body p-5">
                <h3 className="card-title">{text}</h3>
                <p className="card-text">{text2 ? text2 : "Click the image to view more, you'll be redirected to the project website."}</p>
            </div>
            </div>
        </section>
    </>
  )
}

export default Card;
