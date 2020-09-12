import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import Logo from './logo'
import Button from './button'
import Input from './input'
import Background from './background'
import Menu from './menu'

interface CreateProps {
  onLaunch: () => void
}

const Create: React.FC<CreateProps> = props => {
  const [retroId, _] = useState(uuid().toString())
  return (
    <>
      <Background />
      <Menu>
        <Logo color="white" />
        <Input text="Name" placeholder="John Doe" />
        <Link to={`/retro/${retroId}`}>
          <Button text="Create Retro 🚀" onClick={props.onLaunch} />
        </Link>
      </Menu>
    </>
  )
}

export default Create
