import React, { Component } from 'react'

import JSON2React from 'json-2-react'
import elements from './elements.json'

export default class App extends Component {
  render () {
    return (
      <div>
        <JSON2React elements={elements} />
      </div>
    )
  }
}
