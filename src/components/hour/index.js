import React from 'react';
import {withStyles} from "@material-ui/core";

const styles = theme => ({

    hour: {
        // height: theme.spacing.unit*5,
    },

    image: {
        width: theme.spacing.unit*6,
    }


});

function Hour(props){
    const {classes } = props;
    return(
        <div className={classes.hour}>
            <div>{props.temp}&#176;</div>
            <img className={classes.image} src={props.icon} alt='weather icon' />
            <div>{props.time}</div>
        </div>
    )
}

export default withStyles(styles)(Hour);