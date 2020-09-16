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
import Message from './message'
import firebase from '../firebase'
import { generateRetroCreatedEvent } from '../event'

interface CreateProps {
  username: string
  retroId: string
}

type Props = CreateProps & DispatchProp

const Create: React.FC<Props> = props => {
  const [usernameField, setUsernameField] = useState<string>(props.username)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const retroId = uuid().toString()
  const history = useHistory()

  const createRetro = () => {
    firebase
      .firestore()
      .collection(retroId)
      .add(generateRetroCreatedEvent(usernameField))
      .then(data => {
        console.log({ data })
        history.push(`/retro/${retroId}`)
      })
  }

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
            console.log(usernameField)
            if (usernameField === '' || usernameField === undefined) {
              setErrorMessage('Name cannot be empty.')
            } else {
              setErrorMessage('')
              props.dispatch(setUsername(usernameField))
              props.dispatch(setRetroId(retroId))
              createRetro()
            }
          }}
        />
        <Message message={errorMessage} />
      </Menu>
    </>
  )
}
const mapStateToProps = (state: State): CreateProps => ({
  username: state.username,
  retroId: state.retroId
})

export default connect(mapStateToProps)(Create)
