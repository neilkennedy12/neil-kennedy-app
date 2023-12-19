import React from "react";
import styled from "@emotion/styled";
import { Link } from "@mui/material";

export const Home = () => {
  const Header = styled.header`
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const Nav = styled.nav`
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10;
  `;

  const CustomLink = styled(Link)`
    display: inline-block;
    margin: 0 10px;
    color: #fff;
    text-decoration: none;
  `;

  // ... continue styling other components using styled components

  return (
    <div className="App">
      <Header>
        <Nav>
          <CustomLink to="/">Welcome </CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </Nav>
      </Header>
      {/* ... remaining components with styled components ... */}
    </div>
  );
};
