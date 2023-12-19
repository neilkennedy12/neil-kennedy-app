import React from "react";
import styled from "@emotion/styled";

export const Home = () => {
  const Header = styled.header`
    background-color: #333;
    color: #fff;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  return (
    <div className="App">
      <Header>test</Header>
    </div>
  );
};
