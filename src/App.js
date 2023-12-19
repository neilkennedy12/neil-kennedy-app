import "./App.css";
import { Home } from "./components/Home";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { teal } from "@mui/material/colors";
import { AppBar, ThemeProvider, createTheme } from "@mui/material";
import Logo from "./images/Logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: {
      main: "#8bc34a",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <AppBar position="static" style={{ height: 80 }}>
            <div
              style={{
                // justifyContent: "center",
                paddingLeft: 10,
                alignItems: "center",
                display: "flex",
              }}
            >
              <img src={Logo} alt="Logo" width={50} height={50} />
              <h1 style={{ marginLeft: 30, fontWeight: "bold" }}>
                Neil Kennedy
              </h1>
            </div>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
  <Route path="/experience" element={<Experience />} /> */}
            {/* ... add routes for all your desired pages ... */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
