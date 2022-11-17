import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";


function App() {
  return (
    <div className="App bg-pink-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
