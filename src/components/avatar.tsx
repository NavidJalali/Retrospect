import React from 'react'
import styled from 'styled-components'

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10%;
`

interface AvatarProps {
  name: string
}

const Avatar: React.FC<AvatarProps> = props => (
  <Img
    alt={props.name}
    src={`https://avatar.oxro.io/avatar.svg?name=${props.name}`}
  />
)

export default Avatar
