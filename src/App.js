import Home from './components/Home';
import React from 'react'
import {Routes,Route} from "react-router-dom";
import Blog from './components/Blog'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Products from './components/Products'
import Projects from './components/Projects'
import TodoData from './components/TodoData';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Products" element={<Products/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/Tododata" element={<TodoData />} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
    </div>
  )
}

export default App