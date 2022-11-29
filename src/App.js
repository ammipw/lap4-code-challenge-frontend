import { Routes, Route } from "react-router-dom"
import { Home, Redirect } from "./pages"

import './App.css';

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/:shortUrl" element={<Redirect />} />
  </Routes>
    </>
  );
}

export default App;
