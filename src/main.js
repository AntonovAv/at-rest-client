import React from "react"
import ReactDOM from "react-dom"
import {hot} from 'react-hot-loader'
import styles from './main.css'
import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import MailIcon from '@material-ui/icons/Mail'

const Index = hot(module)(() => {
    return <div className={styles.index}>Hello!!<Badge classes={styles} badgeContent={10} color="secondary">
        <MailIcon/>
    </Badge></div>
})

ReactDOM.render(<Index/>, document.getElementById("index"))
