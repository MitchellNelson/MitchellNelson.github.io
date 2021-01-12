import React from 'react'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const circleIcon = <FontAwesomeIcon icon={faCircle}/>

function Experiences (props){
  var vital = {
    dateStart: "August 18",
    dateEnd: "August 19",
    accomplishments: ["did this", "did that", "didn't do that", "sure did do this"],
    employer: "Vital Images",
    position: "Associate Software Engineer"
  };
  var ust = {
    dateStart: "Sep 2018",
    dateEnd: "Jun 2020",
    accomplishments: [
      "Coauthored scholarly publication “GPU Acceleration of Range Queries over Large Data Sets”. Published at the 2019 IEEE/ACM International Conference on Big Data Computing, Applications and Technologies (nominated for best paper award - acceptance rate 29%).",
      "Programmed high performance parallel code to optimize GPU performance for compressed bit-map queries",
      "Developed and analyzed test suites to measure execution time of code run on both a CPU and GPU",
      "Concluded that 85% of the GPU tests provide up to 33.25 X speedup over the parallel CPU implementation"
    ],
    employer: "University of St. Thomas",
    position: "Undergraduate Researcher"
  };
  var leidos = {
    dateStart: "May 2019",
    dateEnd: "Aug 2019",
    accomplishments: [
      "Worked as part of Leidos' Civil team that delivers air traffic control software to the FAA",
      "Improved a release up-leveling tool to test air traffic management data",
      "Expanded the use cases of the tool by allowing XML to be processed in addition to binary inputs",
      "Implemented an XML parser that reformats custom data structures according to differences in source and target releases"
    ],
    employer: "Leidos",
    position: "Software Engineer Intern"
  };
  var ustWeb = {
    dateStart: "Sep 2018",
    dateEnd: "Jun 2020",
    accomplishments: [
      "Developed a responsive homepage geared for student productivity that was used as the default homepage for all students using on-campus computers",
      "Tested front-end code across a variety of devices and browsers spanning a wide range of screen resolutions",
      "Communicated with clients to design and implement custom elements into their web pages"
    ],
    employer: "University of St. Thomas",
    position: "Web Development Intern"
  };

  return(
    <div class="experiences center-column">
      <div class="experiences-content">
        <h2 class="section-title">Experience</h2>
        <Experience {...vital}></Experience>
        <Experience {...ust}></Experience>
        <Experience {...leidos}></Experience>
        <Experience {...ustWeb}></Experience>
      </div>
    </div>
  )
}

function Experience (props){
  function renderTable(){
    var elements = []; 
    for (var i in props.accomplishments){
      elements.push(<li>{props.accomplishments[i]}</li>)
    }
    
    return elements;
  }
  return(
    <div class="experienceTable">
      <div class="experience">
        
        <div><h3>{props.position}</h3></div>
        <div><h4>{props.employer}</h4></div>
      </div>
<Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          What I did
        </AccordionSummary>
        <AccordionDetails>
                <table>
          <td>{renderTable()}</td>
      </table>
        </AccordionDetails>
      </Accordion>

      
    </div>
  )
}

export default Experiences;