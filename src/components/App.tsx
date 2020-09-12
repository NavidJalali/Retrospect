import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Welcome from './welcome'
import Create from './create'
import Join from './join'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <Create
            onLaunch={() => {
              console.log('launched!')
            }}
          />
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
