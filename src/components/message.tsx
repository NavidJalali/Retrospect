import React from 'react'
import styled from 'styled-components'

const Span = styled.span`
  color: ${props => props.color};
  padding: 1em;
`

interface MessageProps {
  message: string
  color?: string
}

const Message: React.FC<MessageProps> = props => (
  <Span color={props.color ?? 'white'}>{props.message}</Span>
)

export default Message
