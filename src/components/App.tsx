import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import Welcome from './welcome'
import Create from './create'
import Join from './join'

const GlobalStyle = createGlobalStyle`
  * {
      font-family: 'Comfortaa', sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
  body {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/join">
          <Join
            onLaunch={() => {
              console.log('launched!')
            }}
          />
        </Route>
        <Route path="/">
          <Welcome
            onJoin={() => {
              console.log('join')
            }}
            onCreate={() => {
              console.log('create')
            }}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
