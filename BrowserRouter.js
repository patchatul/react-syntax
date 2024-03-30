/* add **React router library** to your React projects
> install by type npm i react-router-dom@6 in Terminal ,check package.json file "react-router-dom": "^6.3.0"
> import {BrowserRouter} from ‘react-router-dom’; in index.js file
Put component inside <BrowserRouter><App/></BrowserRouter>
in App.js file import {Routes, Route, Link} from ‘react-router-dom’
add+put each page child component inside <Routes> <Route path=’’/about-me“ element{<AboutMePage/>}/> </Routes>
then change <a> to <Link to=”/about-me” className= ”nav-item”>AboutMePage</Link>
 */
//in index.js
import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
//in app.js
import "./App.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import Contact from "./Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
    <nav>
      <Link to="/" className="nav-item">Homepage</Link>
      <Link to="/about" className="nav-item">About Little Lemon</Link>
      <Link to="/contact" className="nav-item">Contact</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};
export default App;