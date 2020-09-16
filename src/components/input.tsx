import React from 'react'
import styled from 'styled-components'
import { NoOp } from '../constants/noop'

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
`

const StyledInput = styled.input`
  width: 230px;
  height: 40px;
  border-radius: 0 40px 40px 0;
  border: 2px solid white;
  border-left: 0px transparent solid;
  background: transparent;
  text-align: center;
  font-family: 'Comfortaa', sans-serif;
  font-size: 20px;
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`

const Tag = styled.div`
  border-radius: 40px 0 0 40px;
  font-size: 14px;
  width: 70px;
  border: 2px white solid;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: #caacff;
`

interface InputProps {
  text: string
  placeholder?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = props => {
  return (
    <Flex>
      <Tag>{props.text}</Tag>
      <StyledInput
        onChange={event => {
          props.onChange ? props.onChange(event) : NoOp()
        }}
        value={props.value ?? ''}
        placeholder={props.placeholder}
      />
    </Flex>
  )
}

export default Input
