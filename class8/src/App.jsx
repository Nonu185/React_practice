import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import {Route , Routes} from 'react-router-dom'
import About from './pages/About'
import Cources from './pages/Cources'
import Kodex from "./pages/Kodex";
import Kodr from "./pages/Kodr";
import Allcources from './pages/Allcources'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cources" element={<Cources />}>
        <Route path='/cources' element={<Allcources />} />
          <Route path="/cources/kodex" element={<Kodex />} />
          <Route path="/cources/kodr" element={<Kodr />} />
        </Route>
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App
