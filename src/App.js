
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import TalentHub from './Components/TalentHub';
import Footer from './Components/Footer'
import ITStaffing from './Components/ITStaffing';
import Contract from './Components/Contract';
import Choose from './Components/Choose';

import SoftwareDevelopment from './Components/SoftwareDevelopment';

function App() {
  return (
    <>
    <Header />
   {/*<Home /> 
   <TalentHub /> 
   <ITStaffing /> 
   <Contract /> 
   <Choose /> */}
   <SoftwareDevelopment />
   <Footer />
    </>
   
  );
}

export default App;
