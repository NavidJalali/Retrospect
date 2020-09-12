import React from 'react'
import styled from 'styled-components'

interface LogoProps {
  color: string
}

const Span = styled.span`
  font-size: 3em;
  color: ${props => props.color};
  padding: 3em;
`

const Logo: React.FC<LogoProps> = props => {
  return <Span color={props.color}>Retrospect</Span>
}

export default Logo
