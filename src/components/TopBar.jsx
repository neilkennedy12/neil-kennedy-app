import { AppBar } from "@mui/material";
import Logo from "../images/Logo.png";
import { CenteredDiv } from "./styled/CenteredDiv";
import { CustomLink } from "./styled/CustomLink";

export const TopBar = () => {
  return (
    <AppBar position="static" style={{ height: 80 }}>
      <div
        style={{
          justifyContent: "space-between",
          paddingLeft: 10,
          alignItems: "center",
          display: "flex",
        }}
      >
        <CenteredDiv>
          <CustomLink to="/">
            <img src={Logo} alt="Logo" width={50} height={50} />
          </CustomLink>
          <h1 style={{ marginLeft: 30, fontWeight: "bold" }}>Neil Kennedy</h1>
        </CenteredDiv>
        <CenteredDiv>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/projects">Projects</CustomLink>
          <CustomLink to="/contact">Contact</CustomLink>
        </CenteredDiv>
      </div>
    </AppBar>
  );
};
