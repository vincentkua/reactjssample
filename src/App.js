import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Page2 from "./components/Page2";
import Navbar from "./Navbar";
import Notfound from "./components/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
