import React from "react";
const HexList = ({ hex, delate }) => {
  return (
    <>
      {" "}
      {hex.map(item => (
        <div className="container">
          <div style={{ background: `${item.hexCode.first}` }} className="container__item">
            <p>{item.hexCode.first}</p>
          </div>
          <div style={{ background: `${item.hexCode.second}` }} className="container__item">
            {" "}
            <p>{item.hexCode.second}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              delate(item.id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </>
  );
};

export default HexList;
