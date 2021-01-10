import React from 'react'
import "./style.css"

function Experiences (props){
  var vital = {
    dateStart: "August 18",
    dateEnd: "August 19",
    accomplishments: ["did this", "did that", "didn't do that", "sure did do this"],
    employer: "Vital Images",
    position: "Associate Software Engineer"
  };

  return(
    <div class="experiences">
      <h2 class="section-title">Experience</h2>
      <Experience {...vital}></Experience>
      <Experience {...vital}></Experience>
      <Experience {...vital}></Experience>
    </div>
  )
}

function Experience (props){
  function renderTable(){
    var elements = []; 
    for (var i in props.accomplishments){
      elements.push(<tr>{props.accomplishments[i]}</tr>)
    }
    return elements;
  }
  return(
    <div class="experienceTable">
      <div class="experi">
        <div class="experience-dates">{props.dateStart}</div>
        <div class="experience-dates">{props.dateEnd}</div>
        <div>{props.position}</div>
        <div>{props.employer}</div>
      </div>
      <table>
          <td>{renderTable()}</td>
      </table>
      
    </div>
  )
}

export default Experiences;