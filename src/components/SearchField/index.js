import React from 'react'
import PropTypes from 'prop-types'
import TextField from "@material-ui/core/TextField/TextField";

export class SearchField extends React.PureComponent {
    render() {
        return (
            <TextField
                id="search"
                label="Search field"
                type="search"
                margin="normal"
                onChange={this.handleChange}
            />
        )
    }

    handleChange = (event) => {
        this.props.onInput(event.target.value)
    }
}

SearchField.propTypes = {
    onInput: PropTypes.func
}

export default SearchField