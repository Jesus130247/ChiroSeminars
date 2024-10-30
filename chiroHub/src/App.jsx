import { Routes, Route } from 'react-router-dom';
import Root from './components/Root/Root'
// import Nav from './components/Nav/Nav';
// import Footer from './components/Footer/Footer';
import CreateEvents from './components/CreateEvent/CreateEvents';
import EditEvent from './components/EditEvent/EditEvent';
import Featured from './components/Featured/Featured';
import GetUpdates from './components/GetUpdates/GetUpdates';
import TopicFilter from './components/TopicFilter/TopicFilter';
import Testimonials from './components/Testimonials/Testimonials';
// import SearchBar from './components/SearchBar/SearchBar';
import './App.css';
import Seminars from './components/Seminars/Seminars';
import Contact from './components/Contact/Contact';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login'
import DisplaySeminar from './components/DisplaySeminar/DisplaySeminar';

function App() {
  return (
    
    <Routes>
        <Route path="/ChiroSeminars/" element={<Root />} />
        <Route path="/ChiroSeminars/Featured" element={<Featured />} />
        <Route path="/ChiroSeminars/Seminars" element={<Seminars />} />
        <Route path="/ChiroSeminars/Topics" element={<TopicFilter />} />
        <Route path="/ChiroSeminars/CreateEvent" element={<CreateEvents />} />
        <Route path="/ChiroSeminars/EditEvent/:id" element={<EditEvent />} />
        <Route path="/ChiroSeminars/Testimonials" element={<Testimonials />} />
        <Route path="/ChiroSeminars/Updates" element={<GetUpdates />} />
        <Route path="/ChiroSeminars/Contact" element={<Contact />} />
        <Route path="/ChiroSeminars/AboutUs" element={<AboutUs />} />
        <Route path="/ChiroSeminars/Login" element={<Login />} /> 
        <Route path="/ChiroSeminars/DisplaySeminar/:id" element={<DisplaySeminar />} /> 

    </Routes>
   
          
  );
}

export default App;
