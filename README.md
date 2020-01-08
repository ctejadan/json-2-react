# json-2-react

> Renders simple React Components from a JSON

[![NPM](https://img.shields.io/npm/v/json-2-react.svg)](https://www.npmjs.com/package/json-2-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save json-2-react
```

## Usage

```jsx
import React, { Component } from 'react'

import JSON2React from 'json-2-react'
import elements from './elements.json'

class Example extends Component {
  render () {
    return (
      <JSON2React elements={elements} />
    )
  }
}
```
Use a valid JSON such as this one
```json
[
  {
    "type": "div",
    "className": "col-12",
    "style": {
      "backgroundColor": "red",
      "height": 400
    },
    "children": [
      {
        "type": "h1",
        "style": {
          "fontSize": 24,
          "color": "#fff",
          "textAlign": "center",
          "paddingTop": 80
        },
        "data": "HEADER"
      },
      {
        "type": "div",
        "className": "col-12",
        "style": {
          "backgroundColor": "black",
          "height": 100
        }
      },
      {
        "type": "div",
        "className": "d-flex",
        "style": {
          "height": 100
        },
        "children": [
          {
            "type": "div",
            "className": "col-3",
            "style": {
              "backgroundColor": "cyan",
              "border": "1px solid black",
              "height": 100
            },
            "children": [
              {
                "type": "a",
                "href": "https://www.google.cl",
                "data": "link1",
                "style": {
                  "textAlign": "center",
                  "paddingTop": 30
                }
              }
            ]
          },
          {
            "type": "div",
            "className": "col-3",
            "style": {
              "backgroundColor": "cyan",
              "border": "1px solid black",
              "height": 100
            },
            "children": [
              {
                "type": "a",
                "href": "https://www.google.cl",
                "data": "link2",
                "style": {
                  "textAlign": "center",
                  "paddingTop": 30
                }
              }
            ]
          },
          {
            "type": "div",
            "className": "col-3",
            "style": {
              "backgroundColor": "cyan",
              "border": "1px solid black",
              "height": 100
            },
            "children": [
              {
                "type": "a",
                "href": "https://www.google.cl",
                "data": "link3",
                "style": {
                  "textAlign": "center",
                  "paddingTop": 30
                }
              }
            ]
          },
          {
            "type": "div",
            "className": "col-3",
            "style": {
              "backgroundColor": "cyan",
              "border": "1px solid black",
              "height": 100
            },
            "children": [
              {
                "type": "a",
                "href": "https://www.google.cl",
                "data": "link4",
                "style": {
                  "textAlign": "center",
                  "paddingTop": 30
                }
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "type": "div",
    "className": "d-flex",
    "children": [
      {
        "type": "div",
        "className": "col-3",
        "style": {
          "backgroundColor": "blue",
          "height": 200
        },
        "children": []
      },
      {
        "type": "div",
        "className": "col-9",
        "style": {
          "backgroundColor": "green",
          "height": 300
        },
        "children": [
          {
            "type": "a",
            "href": "https://www.google.cl",
            "children": [
              {
                "type": "img",
                "className": "img-fluid",
                "style": {
                  "height": 150
                },
                "src": "https://cdn.worldvectorlogo.com/logos/react.svg"
              }
            ]
          },
          {
            "type": "p",
            "style": {
              "fontSize": 12,
              "color": "#000000"
            },
            "data": "Hi, I'm a dummy text"
          }
        ]
      }
    ]
  },
  {
    "type": "div",
    "className": "col-12",
    "style": {
      "backgroundColor": "grey",
      "height": 200
    },
    "children": [
      {
        "type": "h1",
        "data": "FOOTER",
        "style": {
          "textAlign": "center",
          "paddingTop": 30
        }
      }
    ]
  }
]

```

## License

MIT © [ctejadan](https://github.com/ctejadan)
