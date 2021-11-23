import React from "react";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Weather from './components/weather/Weather'
import News from './components/news/News'
import Contact from './components/contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (

    <Router>
      <Navbar />
      <Route exact path="/" component={Weather} />
      <Route path="/home" component={Weather} />
      <Route path="/news" component={News} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
