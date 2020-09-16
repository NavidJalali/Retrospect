import React from 'react'
import styled from 'styled-components'
import { NoOp } from '../constants/noop'

const StyledButton = styled.button`
  width: 300px;
  height: 40px;
  font-family: 'Comfortaa', sans-serif;
  font-size: 20px;
  outline: none;
  border: 2px solid white;
  border-radius: 40px;
  background: transparent;
  color: white;
  cursor: pointer;
  margin: 1em;
  transition: 100ms;

  &:hover {
    background: white;
    color: #caacff;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.1),
      -2px -2px 4px 0px rgba(0, 0, 0, 0.1);
  }
`

interface ButtonProps {
  text: string
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = props => {
  return (
    <StyledButton
      onClick={() => {
        props.onClick ? props.onClick() : NoOp()
      }}
    >
      {props.text}
    </StyledButton>
  )
}

export default Button
