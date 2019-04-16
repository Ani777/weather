import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Hour from "../hour";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        marginTop:theme.spacing.unit*2

    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },


});


function Hours(props){
    const { classes, tileData } = props;

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cellHeight={110} cols={6}>
                {tileData && tileData.map((tile, i) => (
                    <GridListTile className={classes.gridListTile} key={tile.icon + i}>
                        <Hour temp={tile.temp}
                              icon={tile.icon}
                              time={tile.time}/>

                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default withStyles(styles)(Hours);

