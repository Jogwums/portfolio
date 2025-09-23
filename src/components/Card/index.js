import React from 'react';

// styling


const Card = ({image, text, link, text2, widthvariant}) => {
    return (
    <>
    <section className="mx-auto" id="scroll">
            <div className="card rounded-lg" style={{width: widthvariant, background:"transparent", border: "none",
                padding:"10px", margin:"5px"
            }}>
            <a href={link} target="_blank" rel="noreferrer">
            <img className="card-img-top rounded-lg" src={image} alt="..." />
            {/* <img className="card-img-top " src={image} alt="..." /> */}
            </a>
            <div className="card-body p-3">
                <h3 className="card-title">{text}</h3>
                <p className="card-text">{text2 ? text2 : "Click the image to view more, you'll be redirected to the project website."}</p>
            </div>
            </div>
        </section>
    </>
  )
}

export default Card;
