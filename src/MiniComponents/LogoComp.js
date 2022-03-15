import React from 'react'
import styled from 'styled-components'
import { darkMode } from '../components/Themes'

const Logo = styled.h1`
display: inline-block;
color: ${props => props.color === 'dark' ? darkMode.text : darkMode.body};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`


const LogoCompo = () => {
  return (
    <Logo color={props.theme}>
        MA
    </Logo>
  )
}

export default LogoCompo