import React from "react";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MainBox from "./components/MainBox";
function App() {
  return (
    <Box>
      <Navbar />
      <MainBox />
      <Footer />
    </Box>
  );
}

export default App;
