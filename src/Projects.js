import React from 'react'
import "./style.css"

function Projects (props){
  var drumCV = {
    title: "drumCV",
    tech: "Python, Open CV",
    img: "images/drumCV.png",
    gitHubLink: "https://github.com/MitchellNelson/drumCV",
    demoLink: "https://www.youtube.com/watch?v=NtF3ADvZBPs",
    description: "Computer vision drum simulator that produces drum sounds while a user is 'air drumming' with two colored drum sticks in front of a webcam."
  };
  var beatCollab = {
    title: "beat-collab",
    tech: "Javascript, Vue.js, Node.js, Websockets",
    img: "images/beatCollab.png",
    gitHubLink: "https://github.com/MitchellNelson/beat-collab",
    demoLink: "http://beatcollab.live",
    description: "Collaborative music creator that gives multiple users the power to create a drum beat in real time without being in the same room."
  };
  var reactDrumMachine = {
    title: "Sequencer",
    tech: "React.js, HTML, CSS",
    img: "images/reactdrummachine.png",
    gitHubLink: "https://github.com/MitchellNelson/ReactDrumMachine",
    demoLink: "https://mitchellnelson.github.io/ReactDrumMachine/",
    description: "Classic drum sequencer built with React.js.                                                                                   "
  };
  var snapArt = {
    title: "snap-art",
    tech: "Python, Flask, Javascript",
    img: "images/gallary.jpg",
    gitHubLink: "https://github.com/RileyTschumper/MinneHack2020",
    demoLink: "https://www.youtube.com/watch?v=MC2t7IUA2lI&feature=emb_title",
    description: "MinneHack 2020 3rd place winner. Provides artwork identification by using a scale-invariant feature transform (SIFT) algorithm."
  };
  return(
    <div>
      <div class="circle" id="circle1"></div>
      <div class="projects center-column">
        <div class="project-content">
          <h2 class="section-title">Projects</h2>
          <center>
            <Project {...drumCV}/>
            <Project {...beatCollab}/>
            <Project {...reactDrumMachine}/>
            <Project {...snapArt}/>
          </center>
        </div>
      </div>
    </div>
  )
}

function Project (props){
  // Only get demo and github links if they exist
  var demoLink = props.demoLink ? (<a href={props.demoLink} target="_blank">demo</a>) : "";
  var gitHubLink = props.gitHubLink ? (<a href={props.gitHubLink} target="_blank"><img src="https://cdn.svgporn.com/logos/github-icon.svg"/></a>) : "";
  return(
    <div class="project">
      <img class="project-image" src={props.img}/>
      <div class="project-text">
        <span><span class="project-title">{props.title}</span>
          <span class ="project-links"><span class="project-icon">{gitHubLink}</span></span>
          <span class ="project-links"><span class="project-icon">{demoLink}</span></span>
        </span>
        <p>{props.tech}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Projects;