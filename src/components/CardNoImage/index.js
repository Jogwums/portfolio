import React from 'react';

// styling

const CardNoImage = ({text, link, text2}) => {
    return (
    <>
    <section className="mx-auto" id="scroll">
            <div className="card rounded-lg" style={{width: "18.5rem", background:"transparent", border: "none"}}>
            <div className="card-body p-5">
                <h3 className="card-title">{text}</h3>
				<a href={link} target="_blank" rel="noreferrer">
				</a>
                <p className="card-text">{text2 ? text2 : "Click to view more, you'll be redirected."}</p>
            </div>
            </div>
        </section>
    </>
  )
}

export default CardNoImage;
