import Header from "./Components/Header";
import {Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App bg-pink-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
