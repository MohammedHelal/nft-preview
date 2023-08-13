//import React from "react";

function NFTCard() {
  return (
    <div className="card">
      <img id="etherium-img" src="" alt="" />
      <h1 id="etherium-heading">Equilibrium #3429</h1>
      <p className="etherium-para">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="flex">
        <p className="etherium-icon">
          <img
            className="icon"
            src="./images/icon-ethereum.svg"
            alt="Etherium icon"
          />{" "}
          0.042 ETH
        </p>
        <p className="clock">
          <img
            className="icon"
            src="./images/icon-clock.svg"
            alt="Clock icon"
          />{" "}
          3 days left
        </p>
      </div>
      <hr />
      <div className="flex">
        <img
          id="circle-img"
          src="./images/image-avatar.png"
          alt="Profile avatar image"
        />
        <p className="etherium-para">
          Creation of <span className="name">Jules Wyvern</span>
        </p>
      </div>
    </div>
  );
}

export default NFTCard;
