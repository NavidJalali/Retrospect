import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect, DispatchProp } from 'react-redux'
import { v4 as uuid, parse } from 'uuid'

import Logo from './logo'
import Button from './button'
import Input from './input'
import Background from './background'
import Menu from './menu'
import { State } from '../state'
import { setUsername, setRetroId } from '../actions'
import Message from './message'
import firebase from '../firebase'
import { generateParticipantJoinedEvent } from '../event'

interface JoinProps {
  username: string
  retroId: string
}

type Props = JoinProps & DispatchProp

const Join: React.FC<Props> = props => {
  const [usernameField, setUsernameField] = useState<string>(props.username)
  const [retroIdField, setRetroIdField] = useState<string>(props.retroId)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const retroId = uuid().toString()
  const history = useHistory()

  const joinRetro = () => {
    firebase
      .firestore()
      .collection(retroIdField)
      .get()
      .then(
        snap => {
          if (snap.docs.find(doc => doc.data().kind === 'Retro Created')) {
            firebase
              .firestore()
              .collection(retroIdField)
              .add(generateParticipantJoinedEvent(usernameField))
              .then(() => history.push(`/retro/${retroIdField}`))
          } else {
            setErrorMessage('This retro is malformed.')
          }
        },
        reason => {
          console.error(reason)
          setErrorMessage('Could not find retro.')
        }
      )
  }

  return (
    <>
      <Background />
      <Menu>
        <Logo color="white" />
        <Input
          text="Name"
          placeholder="Jane Doe"
          value={usernameField}
          onChange={event => {
            setUsernameField(event.target.value)
          }}
        />
        <Input
          text="ID"
          placeholder="Some UUID"
          value={retroIdField}
          onChange={event => {
            setRetroIdField(event.target.value)
          }}
        />
        <Button
          text="Join Retro 🚀"
          onClick={() => {
            console.log(usernameField)
            if (usernameField === '' || usernameField === undefined) {
              setErrorMessage('Name cannot be empty.')
            } else if (retroIdField === '' || retroIdField === undefined) {
              setErrorMessage('ID cannot be empty.')
            } else {
              try {
                parse(retroIdField)
                setErrorMessage('')
                props.dispatch(setUsername(usernameField))
                props.dispatch(setRetroId(retroId))
                joinRetro()
              } catch {
                setErrorMessage('ID is not in the right format.')
              }
            }
          }}
        />
        <Message message={errorMessage} />
      </Menu>
    </>
  )
}
const mapStateToProps = (state: State): JoinProps => ({
  username: state.username,
  retroId: state.retroId
})

export default connect(mapStateToProps)(Join)
