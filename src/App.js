import React from "react";
import Homepage from "./pages/Homepage/homepage";
// import Login from "./pages/Login/Login";
// import Profile from "./pages/Profile/Profile";
// import NotFound from "./pages/notFound/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
