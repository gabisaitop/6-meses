import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Challenge  from "./Pages/Challenge"
import Home  from "./Pages/Home"
import DateGenerator  from "./Pages/DateGenerator"
import GaleryPage  from "./Pages/Galery"
import NotFoundPage  from "./Pages/NotFound"
import StartingPage  from "./Pages/StartingPage"
import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <> 
    <CssBaseline>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<StartingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path='/challenge' element={<Challenge />} />
          <Route path='/dates' element={<DateGenerator />} />
          <Route path='/gallery' element={<GaleryPage />} />
          <Route path='*' element={<NotFoundPage />} />
      </Routes>
      </BrowserRouter>
    </CssBaseline>
  </>
  );
}