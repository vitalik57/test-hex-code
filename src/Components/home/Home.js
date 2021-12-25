import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { delateHex } from "../../redux/action/hexAction";
import HexList from "./HexList";
import { MenuStyled } from "./MenuStyled";

const Home = ({ hex, delateHex }) => {
  const delate = id => {
    delateHex(id);
  };
  return (
    <>
      <MenuStyled>
        <h1>Menu</h1>

        <ul>
          <li>
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
              Homepage
            </NavLink>
          </li>
          <li>
            <NavLink style={{ textDecoration: "none", color: "black" }} to="/new">
              New
            </NavLink>
          </li>{" "}
        </ul>
        <HexList hex={hex} delate={delate} />
      </MenuStyled>
    </>
  );
};
const mapStateToProps = (state, ownProps) => ({
  hex: state.hex
});
const mapDispatchToProps = {
  delateHex: delateHex
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
// export default Home;
