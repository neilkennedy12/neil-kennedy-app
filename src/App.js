import "./App.css";
import { Home } from "./components/Home";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { lime, teal } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopBar } from "./components/TopBar";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { NotFound } from "./components/NotFound";
import { Footer } from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: { main: teal[500] },
    secondary: {
      main: lime[500],
    },
    background: { main: teal[100], light: teal[50], dark: teal[900] },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.background.light,
        }}
      >
        <BrowserRouter>
          <TopBar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
            <Footer />
          </TopBar>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
