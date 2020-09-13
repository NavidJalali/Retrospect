import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect, DispatchProp } from 'react-redux'
import { v4 as uuid } from 'uuid'

import Logo from './logo'
import Button from './button'
import Input from './input'
import Background from './background'
import Menu from './menu'
import { State } from '../state'
import { setUsername, setRetroId } from '../actions'

interface CreateProps {
  username: string
  retroId: string
}

type Props = CreateProps & DispatchProp

const Create: React.FC<Props> = props => {
  const [usernameField, setUsernameField] = useState<string>(props.username)
  const retroId = uuid().toString()
  const history = useHistory()
  return (
    <>
      <Background />
      <Menu>
        <Logo color="white" />
        <Input
          text="Name"
          placeholder="John Doe"
          value={usernameField}
          onChange={event => {
            setUsernameField(event.target.value)
          }}
        />
        <Button
          text="Create Retro 🚀"
          onClick={() => {
            props.dispatch(setUsername(usernameField))
            props.dispatch(setRetroId(retroId))
            history.push(`/retro/${retroId}`)
          }}
        />
      </Menu>
    </>
  )
}
const mapStateToProps = (state: State): CreateProps => ({
  username: state.username,
  retroId: state.retroId
})

export default connect(mapStateToProps)(Create)
