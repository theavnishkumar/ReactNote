import React from "react";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Notes from "./components/Notes";
import {createTheme,ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
import { fontWeight } from "@mui/system";

const theme=createTheme({
  palette: {
    primary: {
      main: '#1565c0'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: '400',
    fontWeightRegular: '500',
    fontWeightMedium: '600',
    fontWeightBold: '700'
    
  }
})

function App() {
  return (
    <>
    <div>
    <ThemeProvider theme={theme}>
   <Router>
            <Routes>
             <Route exact path="/" element={<Create/>}></Route>
             <Route path="/notes" element={<Notes/>}></Route> 
            </Routes>
  </Router>

    </ThemeProvider>
    </div>
    </>
  );
}

export default App;
