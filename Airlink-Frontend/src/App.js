import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Register } from "./components/Register";
import { Login } from "./components/Login"; 
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BookingForm from './components/BookingForm';
import {UserNav} from './components/UserNav';
import SeatSelection from './components/SeatSelection';
import PaymentPage from './components/PaymentPage';
import FlightCard from './components/FlightCard';


function App() {
 

  return (
    <Router>
      <div className="App">
        
        <Routes>
         
          <Route path="/" element={
            <>
              <NavBar />
              <Banner />
        {/* Define routes for Register and Login */}
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/register" element={
            <>
              <NavBar />
              <Register />
            </>
          } />
          <Route path="/login" element={
          <>
            <NavBar />
            <Login />
          </>} />
          <Route path="/book" element={
            <>
            <UserNav/>
            <BookingForm/>
            </>
          } />
          <Route path="/seat-selection" element={
            <>
            <UserNav/>
            <SeatSelection/>
            </>
          } />
          <Route path="/payment" element={
            <>
            <UserNav/>
            <PaymentPage/>
            </>
          } />
          <Route path="/flightcard" element={
            <>
            <UserNav/>
            <FlightCard/>
            </>
          } />
          
          
        </Routes>
        
       
      </div>
    </Router>
    
 
  );
}

export default App;

