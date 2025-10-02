
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import TalentHub from './Components/TalentHub';
import Footer from './Components/Footer'
import ITStaffing from './Components/ITStaffing';
import Contract from './Components/Contract';
import Choose from './Components/Choose';

import SoftwareDevelopment from './Components/SoftwareDevelopment';
import MobileDevelopment from './Components/MobileDevelopment';
import Accessibility from './Components/Accessibility';
import Insights from './Components/Insights';
import Carrers from './Components/Carrers';

function App() {
  return (
    <>
    <Header />
   
   {/*
    <Home /> 
   <TalentHub /> 
   <ITStaffing /> 
   <Contract /> 
   <Choose /> 
   <SoftwareDevelopment /> 
   <MobileDevelopment />  

   <Accessibility />  
   <Insights /> 
    <Home />  */}
    <Carrers />
  
   <Footer />
    </>
   
  );
}

export default App;
