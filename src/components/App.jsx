import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main'
import Header from './Header'
import Footer from './Footer'
import About from './About'
import Works from './Works'

const appHeight = () => {
  const main_element = document.documentElement
  main_element.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()

function App() {
  return (
  <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact={+true} element={<Main/>}/>
        <Route path="/about" exact={+true} element={<About/>}/>
        <Route path="/works" exact={+true} element={<Works/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;
