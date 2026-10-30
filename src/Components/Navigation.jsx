import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <NavigationStyle>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/packages">Packages</Link></li>
      </ul>
    </NavigationStyle>
  );
}

const NavigationStyle = styled.div`
  /* Add your navigation styles here */
`;

export default Navigation;
