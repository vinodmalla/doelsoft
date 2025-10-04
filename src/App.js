import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import { createBrowserRouter, Outlet } from 'react-router-dom'; // ✅ fixed import
import TalentHub from './Components/TalentHub';
import Footer from './Components/Footer';
import ITStaffing from './Components/ITStaffing';
import Contract from './Components/Contract';
import Choose from './Components/Choose';
import SoftwareDevelopment from './Components/SoftwareDevelopment';
import MobileDevelopment from './Components/MobileDevelopment';
import Accessibility from './Components/Accessibility';
import Insights from './Components/Insights';
import Carrers from './Components/Carrers';
import ContactUs from './Components/ContactUs';
import ScrollTop from './Components/ScrollTop';
import Rpo from './Components/Rpo';
import Executive from './Components/Executive';
import Permanent from './Components/Permanent';

function App() {
  return (
    <>
      <Header />
      <ScrollTop />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

// ✅ Correct router creation
export const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/talenthub", element: <TalentHub /> },
      { path: "/chooseus", element: <Choose /> },
      { path: "/carrers", element: <Carrers /> },
      { path: "/insights", element: <Insights /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/itstaffing", element: <ITStaffing /> },
      { path: "/contract", element: <Contract /> },
      { path: "/permanent", element: <Permanent /> },
      { path: "/excutive", element: <Executive /> },
      { path: "/rpo", element: <Rpo /> },
    ],
  },
]);
