import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class JSON2React extends Component {
  static propTypes = {
    elements: PropTypes.array
  }

  renderElements=(elements) => {
    return elements.map((element, ix) =>
      React.createElement(
        element.type,
        { className: element.className, style: element.style, href: element.href, src: element.src, key: element.type + '-' + ix }, element.data || (element.children && element.children.length > 0 && this.renderElements(element.children))
      )
    )
  }

  render() {
    const {
      elements
    } = this.props

    return (
      <div>
        {this.renderElements(elements)}
      </div>
    )
  }
}
