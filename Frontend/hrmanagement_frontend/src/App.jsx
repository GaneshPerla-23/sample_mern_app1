import './App.css'
import Header_page from './components/Header_page'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import {Routes,Route} from 'react-router-dom'


function App() {

  return (
    <div>
      <Header_page />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>  
      <Footer />
   </div>
  )
}

export default App