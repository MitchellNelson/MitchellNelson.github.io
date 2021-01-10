import React from 'react'
import "./style.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar (props){
  return(
    <div class="navbar">
      <AnchorLink href='#home'>Home</AnchorLink>
      <AnchorLink href='#experience'>Experience</AnchorLink>
      <AnchorLink href='#tech-and-tools'>Tech and Tools</AnchorLink>
      <AnchorLink href='#projects'>Projects</AnchorLink>
    </div>
  )
}

export default Navbar;