import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { database } from './firebase'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App database = { database }/>, document.getElementById('root'))

serviceWorker.unregister()
