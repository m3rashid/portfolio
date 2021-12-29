import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Works from "./Works";

const appHeight = () => {
  const main_element = document.documentElement;
  main_element.style.setProperty("--app-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", appHeight);
appHeight();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
