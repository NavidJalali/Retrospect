import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Logo from './logo'
import Button from './button'
import Input from './input'
import Background from './background'
import Menu from './menu'

interface JoinProps {
  onLaunch: () => void
}

const Join: React.FC<JoinProps> = props => {
  const [retroId, _] = useState(uuid().toString())
  return (
    <>
      <Background />
      <Menu>
        <Logo color="white" />
        <Input text="Name" placeholder="John Doe" />
        <Input text="Retro ID" placeholder="Some UUID" />
        <Link to={`/retro/${retroId}`}>
          <Button text="Join Retro 🚀" onClick={props.onLaunch} />
        </Link>
      </Menu>
    </>
  )
}

export default Join
