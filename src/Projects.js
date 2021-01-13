import React from 'react'
import "./style.css"

function Projects (props){
  var drumCV = {
    title: "drumCV",
    tech: "Python, Open CV",
    img: "https://camo.githubusercontent.com/a2e13b8e2daa70a98e7f459fee866e7efc760cd011ddee6969aedeede42d9a0a/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f4e7446334144765a4250732f302e6a7067",
    gitHubLink: "https://github.com/MitchellNelson/drumCV",
    demoLink: "https://www.youtube.com/watch?v=NtF3ADvZBPs",
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
  var reactDrumMachine = {
    title: "React Drum Machine",
    tech: "React.js, HTML, CSS",
    img: "images/reactdrummachine.png",
    gitHubLink: "https://github.com/MitchellNelson/ReactDrumMachine",
    demoLink: "https://mitchellnelson.github.io/ReactDrumMachine/",
    description: "Classic drum sequencer built with React.js as a way to learn about the framework"
  };
  var snapArt = {
    title: "snap-art",
    tech: "Javascript, Vue.js, Node.js, Websockets",
    img: "images/gallary.jpg",
    gitHubLink: "https://github.com/RileyTschumper/MinneHack2020",
    demoLink: "https://www.youtube.com/watch?v=MC2t7IUA2lI&feature=emb_title",
    description: "MinneHack 2020 3rd place winner. Users can snap a photo of a peice of art and the application will identify it"
  };
  return(
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