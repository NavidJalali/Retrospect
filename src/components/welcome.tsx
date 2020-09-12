import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Logo from './logo'
import Button from './button'
import Background from './background'

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

interface WelcomeProps {
  onJoin: () => void
  onCreate: () => void
}

const Welcome: React.FC<WelcomeProps> = props => {
  return (
    <>
      <Background />
      <Menu>
        <Logo color="white" />
        <Link to="/join">
          <Button text="Join a Retro" onClick={props.onJoin} />
        </Link>
        <Link to="/create">
          <Button text="Create a Retro" onClick={props.onCreate} />
        </Link>
      </Menu>
    </>
  )
}

export default Welcome
