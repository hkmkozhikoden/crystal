import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Gift  from './pages/gift'
import Course from './pages/course'
import Contact from './pages/contact'
import './asstes/modules/boostrap/bootstrap.css'
import './asstes/modules/aos/aos.css'
import Blog from "./pages/blog";
import DiamondView from "./pages/diamond-view";

function App() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        offset: 10,
    });
}, []);
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/diamond" element={<About/>}/>
      <Route path="/gold" element={<Course/>} />
      <Route path="/gift" element={<Gift/>}/>
      <Route path="/ring" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/diamond-view" element={<DiamondView/>} />

    </Routes>
    </Router>
    </div>
  );
}

export default App;
