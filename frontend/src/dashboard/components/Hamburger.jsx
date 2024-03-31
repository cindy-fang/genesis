import React from 'react'
import styled from 'styled-components'

const Hamburger = () => {
  return (
    <HAMBURGER className='hamburger'>
        <BURGER className='burger burger1'></BURGER>
        <BURGER className='burger burger2'></BURGER>
        <BURGER className='burger burger3'></BURGER>
    </HAMBURGER>
  )
}

const HAMBURGER = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
`
const BURGER = styled.div`
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3 linear;
`

export default Hamburger