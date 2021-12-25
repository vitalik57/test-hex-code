import React from "react";
const HexList = ({ hex, delate }) => {
  return (
    <>
      {" "}
      {hex.map(item => (
        <div className="container" style={{ background: `${item.hexCode}` }}>
          <div className="container__item">
            <p>{item.hexCode}</p>
            <button
              type="button"
              onClick={() => {
                delate(item.id);
              }}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HexList;
