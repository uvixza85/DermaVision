import './App.css'
import Result from './components/Result';
import Upload from './components/Upload';
import Research from './components/Research';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {

  return (
    <>
    <div className='app'>
      <Navbar/>
      <div   className='maincontainer' >
    <Research/>
    </div>

    <Footer/>
    </div>
    </>
  );
}

export default App
