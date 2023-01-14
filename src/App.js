// import logo from './logo.svg';
import './App.css';

import React from "react";
import { useState, useEffect } from 'react'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Loading from "./components/Loading";


export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, [])
  return (
    // <main className="text-slate-50 bg-metal body-font">
    //   <Navbar />
    //   <About />
    //   <Profile />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </main>
    <main className="text-slate-50 bg-metal body-font">
    {loading === false ? (
        <>
          <Navbar />
          <About />
          <Profile />
          <Skills />
          <Projects />
          <Contact />
        </>
      ) : (
        <Loading />
      )}
    </main>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
