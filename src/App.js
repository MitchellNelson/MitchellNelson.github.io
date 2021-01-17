
import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from "./Navbar";
import Experiences from "./Experiences";
import Home from "./Home";
import TechAndTools from "./TechAndTools";
import Projects from "./Projects";


import "./style.css"
 
const App = () => (
  <div>
    <div class="content">
      <Navbar/>
      <section id='home'>
        <Home/>
      </section>
      <section id='experiences'>
        <Experiences/>
      </section>
      <section id='tech-and-tools'>
        <TechAndTools/>
      </section>
      <section id='projects'>
        <Projects/>
      </section>
    </div>
  </div>
)

export default App
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)