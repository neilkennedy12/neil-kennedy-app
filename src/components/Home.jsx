import React from "react";
import { CenteredDiv } from "./styled/CenteredDiv";
import { CustomLink } from "./styled/CustomLink";
import { Button, Container } from "@mui/material";
import Profile from "../images/Profile.jpg";
import { Footer } from "./Footer";
import { useWindowSize } from "@uidotdev/usehooks";
import { LinkedIn } from "./LinkedIn";

export const Home = () => {
  const size = useWindowSize();
  return (
    <div style={{}}>
      <Container>
        <CenteredDiv
          justifyContent="space-around"
          style={{ padding: 10, height: size.height - 200 }}
        >
          <CustomLink to="/about">
            <CenteredDiv
              style={{
                padding: 20,
                borderRadius: "10px",
                flexFlow: "column",
              }}
            >
              <div style={{ fontSize: 18, fontWeight: "bold", width: "100%" }}>
                About Me
              </div>
              <CenteredDiv>
                Learn a little more about my background, experience, and the
                things I love!
              </CenteredDiv>
              <Button href="/about">About</Button>
            </CenteredDiv>
          </CustomLink>
          <CustomLink to="/projects">
            <CenteredDiv>Projects</CenteredDiv>
          </CustomLink>
          <CustomLink to="/contact">
            <CenteredDiv>Contact</CenteredDiv>
          </CustomLink>
        </CenteredDiv>
        {/* <CenteredDiv style={{ margin: 50 }}>
          <LinkedIn />
        </CenteredDiv> */}
      </Container>
    </div>
  );
};
