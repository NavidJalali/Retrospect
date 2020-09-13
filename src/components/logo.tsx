import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LogoProps {
  color: string
}

const Span = styled.span`
  font-size: 3em;
  color: ${props => props.color};
  padding: 3em;
`

const Logo: React.FC<LogoProps> = props => {
  return (
    <Span color={props.color}>
      <Link to="/">Retrospect</Link>
    </Span>
  )
}

export default Logo
