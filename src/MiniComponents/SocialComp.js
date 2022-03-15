import React from 'react'
import { NavLink } from 'react-router-dom'
import { Github, Linkedin, Facebook, Instagram } from '../components/AllSvgs'




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

const Line = styled(motion.span)`
width: 2px;
height: 8rem;
background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body  };
`

const SocialComp = () => {
  return (
    <Icons>
        <div>
         <NavLink to="/">
         <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink to="/">
         <Linkedin width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink to="/">
         <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
         </NavLink>
        </div>

        <div>
         <NavLink to="/">
         <Instagram width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text  : DarkTheme.body  } />
         </NavLink>
        </div>

    </Icons>
    
    
  )
}

export default SocialComp