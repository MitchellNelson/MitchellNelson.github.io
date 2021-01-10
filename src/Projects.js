import React from 'react'
import "./style.css"

function Projects (props){
  var drumCV = {
    title: "DrumCV",
    tech: "Python, Open CV",
    img: "https://camo.githubusercontent.com/a2e13b8e2daa70a98e7f459fee866e7efc760cd011ddee6969aedeede42d9a0a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4e7446334144765a4250732f302e6a7067",
    gitHubLink: "https://github.com/MitchellNelson/drumCV",
    demoLink: "",
    description: "Computer vision drum simulator that produces drum sounds while a user is 'air drumming' with two colored drum sticks in front of a webcam."
  };
  var beatCollab = {
    title: "beat-collab",
    tech: "Javascript, Vue.js, Node.js, Websockets",
    img: "https://github.com/nels4929/beat-collab/raw/master/public/images/Screenshot.png",
    gitHubLink: "https://github.com/MitchellNelson/beat-collab",
    demoLink: "http://beatcollab.live",
    description: "Collaborative music creator that gives multiple users the power to create a drum beat in real time without being in the same room."
  };

  return(
    <div class="projects">
      <h2 class="section-title">Projects</h2>
      <center>
        <Project {...drumCV}/>
        <Project {...beatCollab}/>
        <Project {...drumCV}/>
        <Project {...beatCollab}/>
      </center>
    </div>
  )
}

function Project (props){
  // Only get demo and github links if they exist
  var demoLink = props.demoLink ? (<a href={props.demoLink} target="_blank">demo</a>) : "";
  var gitHubLink = props.gitHubLink ? (<a href={props.gitHubLink} target="_blank"><img src="https://cdn.svgporn.com/logos/github-icon.svg"/></a>) : "";
  return(
    <div class="project">
      
      <span><span class="project-title">{props.title}</span>
        <span span class ="project-links">{gitHubLink}{demoLink}</span>
      </span>
      
      <p>{props.tech}</p>
      <img class="project-image" src={props.img}/>
      <p>{props.description}</p>
    </div>
  )
}

export default Projects;