//import React from "react";

function NFTCard() {
  return (
    <div className="card">
      <img
        id="etherium-img"
        src="./images/image-equilibrium.jpg"
        alt="Etherium image"
      />
      <img
        id="etherium-view"
        src="./images/icon-view.svg"
        alt="Etherium view cover"
      />
      <h1 id="etherium-heading">Equilibrium #3429</h1>
      <p className="etherium-para">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex icons-div">
        <p className="etherium-icon flex">
          <img
            className="icon"
            src="./images/icon-ethereum.svg"
            alt="Etherium icon"
          />{" "}
          0.042 ETH
        </p>
        <p className="clock flex">
          <img
            className="icon"
            src="./images/icon-clock.svg"
            alt="Clock icon"
          />{" "}
          3 days left
        </p>
      </div>
      <p className="etherium-para flex-para">
        <img
          id="circle-img"
          src="./images/image-avatar.png"
          alt="Profile avatar image"
        />
        Creation of <span className="name">Jules Wyvern</span>
      </p>
    </div>
  );
}

export default NFTCard;
