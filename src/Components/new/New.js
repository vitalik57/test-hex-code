import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewHex } from "../../redux/action/hexAction";
import { v4 as uuidv4 } from "uuid";
import { NavLink } from "react-router-dom";
import { NewStyled } from "./NewStyled";

const New = ({ addNewHex }) => {
  const [hexCode, setVal] = useState({ first: "", second: "" });
  const [active, setActive] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setVal(prev => ({ ...prev, [name]: value }));
    const regex = new RegExp("^#([0-9a-f]{3}){1,2}$");

    if (regex.test(hexCode.first && hexCode.first)) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const add = () => {
    const item = { id: uuidv4(), hexCode: hexCode };
    addNewHex(item);
    setVal({ first: "", second: "" });
  };
  return (
    <NewStyled>
      <form>
        <input
          className="form__input"
          name="first"
          type="text"
          onChange={handleChange}
          value={hexCode.first}
          placeholder="Create hex"
        />
        <input
          className="form__input"
          name="second"
          type="text"
          onChange={handleChange}
          value={hexCode.second}
          placeholder="Create hex"
        />
        <NavLink activeStyle={{ color: "red", textDecoration: "none" }} to="/">
          {" "}
          <button type="button" disabled={!active} onClick={add}>
            Submit{" "}
          </button>
        </NavLink>
      </form>
    </NewStyled>
  );
};
const mapStateToProps = (state, ownProps) => ({
  hex: state.hex
});
const mapDispatchToProps = {
  addNewHex: addNewHex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(New);
// export default New;
