import { AppBar, Typography } from "@mui/material";
import Profile from "../images/Profile.jpg";
import { CenteredDiv } from "./styled/CenteredDiv";
import { CustomLink } from "./styled/CustomLink";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTheme } from "@emotion/react";

export const TopBar = ({ children }) => {
  const theme = useTheme();
  const [{ x, y }, scrollTo] = useWindowScroll();
  const fixedHeight = 100;
  const maxHeight = 600;
  const height = y > maxHeight - fixedHeight ? fixedHeight : maxHeight - y;
  const imgHeight = height / 1.8;
  return (
    <div>
      <CenteredDiv
        height={height}
        style={{
          top: 0,
          position: "fixed",
          background: theme.palette.background.main,
          width: "100%",
          zIndex: 100,
          boxShadow: "0px 1px 5px lightgray",
          // transition: "height .05s",
        }}
      >
        <div
          style={{
            flex: 1,
            justifyContent: "space-between",
            // alignItems: "center",
            display: "flex",
          }}
        >
          <CenteredDiv>
            <CustomLink to="/">
              <div
                style={{
                  borderRadius: imgHeight / 2,
                  overflow: "hidden",
                  width: imgHeight,
                  height: imgHeight,
                }}
              >
                <img
                  src={Profile}
                  alt="Profile"
                  width={imgHeight}
                  height={imgHeight}
                />
              </div>
            </CustomLink>
            <Typography
              style={{
                marginLeft: 30,
                fontWeight: "bold",
                fontSize: height * 0.1 + 20,
              }}
            >
              Neil Kennedy
            </Typography>
          </CenteredDiv>
          <CenteredDiv style={{ marginRight: 20 }}>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
          </CenteredDiv>
        </div>
      </CenteredDiv>
      <div style={{ marginTop: maxHeight + 20 }}>{children}</div>
    </div>
  );
};
