import { BrowserRouter as Router, Route,Routes}from "react-router-dom";
import React, { useEffect } from 'react';
import AOS from 'aos';
import './App.css';
import Home from './pages/home'
import About from './pages/about'
import Mycourse  from './pages/mycourse'
import Course from './pages/course'
import Contact from './pages/contact'
import './asstes/modules/boostrap/bootstrap.css'
import './asstes/modules/aos/aos.css'
import Blog from "./pages/blog";

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
      <Route path="/about" element={<About/>}/>
      <Route path="/course" element={<Course/>} />
      <Route path="/mycourse" element={<Mycourse/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
