import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({

    textField: {
        marginTop: theme.spacing.unit*4,
    },

    input: {
        height: theme.spacing.unit*1.75,
    },

    button: {
        marginTop: theme.spacing.unit*5,
        marginLeft: theme.spacing.unit,
    }
});
function SearchField(props){
    const { classes } = props;
    return(
        <>
        <TextField
            id="outlined-search"
            label="City"
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            value={props.city}
            onChange={props.handleChange}
            InputProps={{ classes: { input: props.classes.input } }}
        />
            <Button variant="outlined" color="primary" className={classes.button} onClick={props.handleClick}>
                Search
            </Button>
            </>
    )
}

export default withStyles(styles)(SearchField);