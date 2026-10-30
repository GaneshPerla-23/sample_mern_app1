
import './App.css'
import Header from './components/Header_page'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

<<<<<<< HEAD
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/contact'
import AdminLogin from './pages/AdminLogin'
import AdminHome from './pages/AdminHome'
import { Routes, Route } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {Routes,Route} from 'react-router-dom'
<<<<<<< HEAD
import Services from './pages/Services';
=======

>>>>>>> c2a2647df2690d1a443ef03f99121c8a7a7036ab
>>>>>>> 7f8943f30708ef2b62c65fa9127157502998759c

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emphome" element={<EmpHome />} />
        <Route path="/hrhome" element={<HrHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/adminhome" element={<AdminHome />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App
