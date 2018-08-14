import React from "react"
import ReactDOM from "react-dom"
import {hot} from 'react-hot-loader'
import App from './App'

const Index = hot(module)(() => {
    return <App/>
})

ReactDOM.render(<Index/>, document.getElementById("index"))
