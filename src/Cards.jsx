import React from "react";

function Cards(props) {
  return (
    <>
      <div className="webCard">
        <div className="image-div">
          <img src={props.imgsrc} alt="alt" />
        </div>
        <div className="card-body">
          <h5>{props.sname}</h5>
          <h1>{props.title}</h1>
        </div>
        <div className="btn-div">
          <a href={props.link} target="_balnk">
            <button className="btn-div">Watch Now</button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards;
