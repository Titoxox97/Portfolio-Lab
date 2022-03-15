import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Github, Linkedin, Facebook, Instagram } from '../components/AllSvgs'
import {darkMode} from '../components/Themes'




const Icons = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: fixed;
bottom: 0;
left: 2rem;

z-index:3;

&>*:not(:last-child){
    margin: 0.5rem 0;
}

`

const Line = styled.span`
width: 2px;
height: 8rem;
background-color:${props => props.theme.text};
`


const SocialComp = () => {
  return (
    <Icons>
        <div>
         <NavLink style={{color:'inherit'}} target="_blank"   to={{pathname:"https://github.com/codebucks27"}}>
         <Github width={25} height={25} fill={props.theme === "dark" ? darkMode.text  : darkMode.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink style={{color:'inherit'}} target="_blank"   to={{pathname:"https://github.com/codebucks27"}}>
         <Linkedin width={25} height={25} fill={props.theme === "dark" ? darkMode.text  : darkMode.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink style={{color:'inherit'}} target="_blank"   to={{pathname:"https://github.com/codebucks27"}}>
         <Facebook width={25} height={25} fill={props.theme === "dark" ? darkMode.text  : darkMode.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink style={{color:'inherit'}} target="_blank"   to={{pathname:"https://github.com/codebucks27"}}>
         <Instagram width={25} height={25} fill={props.theme === "dark" ? darkMode.text  : darkMode.body  } />
         </NavLink>
        </div>

    </Icons>
    
    
  )
}

export default SocialComp