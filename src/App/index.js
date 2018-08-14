import React, {PureComponent} from "react"
import SearchField from '../components/SearchField'
import MenuItem from '@material-ui/core/MenuItem'
import Popover from "@material-ui/core/Popover/Popover"
import MenuList from "@material-ui/core/MenuList/MenuList"
import ClickAwayListener from "@material-ui/core/ClickAwayListener/ClickAwayListener"
import axios from 'axios'

export default class App extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            items: []
        }

        this.menuAnchor = React.createRef()
    }

    render() {
        return (
            <div>
                Main application
                <br/>
                <SearchField onInput={this.handleSearchChanged}/>
                <br/>
                <div ref={this.menuAnchor}/>
                entered text: {this.state.search}
                <Popover
                    anchorEl={this.menuAnchor.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.items.length > 0}
                    disablePortal
                >
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <MenuList>
                            {this.state.items.map((item, i) => {
                                return (<MenuItem key={i}>{item.name}</MenuItem>)
                            })}
                        </MenuList>
                    </ClickAwayListener>
                </Popover>
            </div>
        )
    }

    handleClose = () => {
        this.setState({
            items: []
        })
    }

    handleSearchChanged = (text) => {
        this.setState({
            search: text,
        })

        const config = {
            params: {
                words: text
            },
            headers: {
                'X-API-Key': 'admin',
                'Accept': 'application/json'
            },
        }
        axios.get("http://localhost:3333/c/api/v1/tasks", config).then((data) => {
            this.setState({
                items: data.data.items
            })
        })
    }
}