import { Container } from "@mui/material";
import { CenteredDiv } from "./styled/CenteredDiv";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useTheme } from "@emotion/react";

export const Footer = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        background: theme.palette.background.dark,
        color: theme.palette.secondary.main,
      }}
    >
      <CenteredDiv>
        <Container>
          <CenteredDiv alignItems="start" style={{ flexFlow: "column " }}>
            <CenteredDiv style={{ fontSize: 20 }}>
              Neil Kennedy
              <LinkedInIcon />
            </CenteredDiv>
            <CenteredDiv>
              Full Stack Developer with 3 years of experience developing health
              tech web applications
            </CenteredDiv>
          </CenteredDiv>
        </Container>
      </CenteredDiv>
      <CenteredDiv style={{ borderTop: "2px solid lightGray" }}>
        © Copyright 2023. Created by Neil Kennedy
      </CenteredDiv>
    </div>
  );
};
