import './App.css'
import Result from './components/Result';
import Upload from './components/Upload';
import Research from './components/Research';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import LearnPage from './components/Learnpage';
import UserForm from './components/Userform';

function App() {

  return (
    <Router>
    <div className='app'>
      <Navbar/>
      <div   className='maincontainer' >
      <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/upload" element={<Upload />} />
          <Route path="/form" element={<UserForm/>} />
          <Route path="/report" element={<Report />} />
          <Route path="/result" element={<Result/>} />
          <Route path="/learn" element={<LearnPage/>} />
          <Route path="/research" element={<Research />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>

    <Footer/>
    </div>
    </Router>
  );
}

export default App
