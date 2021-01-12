import React from 'react'
import "./style.css"

function Home (props){
  return(
    <div class="home-container">
    	<div class="home-content">
    		<img src="profile.jpg"/>
	    	<h1 class="home-name" >Mitchell Nelson</h1>
	    	<p class="home-description">I am a Software Engineer based in the Minneapolis area with a passion for technology and creating music... or making technology that makes music</p>
    	</div>
    </div>
  )
}
export default Home;