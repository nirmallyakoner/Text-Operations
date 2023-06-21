
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
function App() {
  return (
    <>

      <Navbar 
      navItems1="Home"
      navItems2="Career"
      navItems3="Contact"
      navItems4="Account"
      />
      
     <div className='container'>
     <TextForm 
        textTitle="Enter Your text To analyze" 
      />
     </div>

      

    </>
  );
}

export default App;
