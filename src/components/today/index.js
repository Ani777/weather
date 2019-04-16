import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Hours from "../hours";


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },

    image: {
        marginTop: theme.spacing.unit*2

    },
    temp: {
        display: 'inline-block',
        padding: theme.spacing.unit*2,
        fontSize: theme.spacing.unit*3,
        marginRight: theme.spacing.unit*1
    }
});


function Today(props){

    const { classes, current, forecast } = props;
    const time = current.last_updated && current.last_updated.slice(-5);
    const tileData = forecast[0] && forecast[0].hour.map(item => {
        return {
            temp: item.temp_c,
            icon: item.condition.icon,
            time: item.time.slice(-5)
        }
    })
    // const src = current.condition && current.condition.icon;

    const minTemp = forecast[0] && forecast[0].day.mintemp_c;
    const maxTemp = forecast[0] && forecast[0].day.maxtemp_c;
    const conditionText = current.condition && current.condition.text;
    const date = new Date();
    const day = date.getDate();
    function getMonthName(){
        const month = date.getMonth();
        switch(month){
            case 0:
                return 'January';
            case 1:
                return 'February';
            case 2:
                return 'March';
            case 3:
                return 'April';
            case 4:
                return 'May';
            case 5:
                return 'June';
            case 6:
                return 'July';
            case 7:
                return 'August';
            case 8:
                return 'September';
            case 9:
                return 'October';
            case 10:
                return 'November';
            case 11:
                return 'December';
            default:
                return '';
        }
    }

    return(
        <div>
            <Paper className={classes.root} elevation={1}>

                <Typography variant="h5" >
                    {getMonthName()} {day}, {time}
                </Typography>
                <pre><Typography >
                    Day {maxTemp}&#176;    Night {minTemp}&#176;

                </Typography></pre>
                <Typography variant="h1" >
                    {props.current.temp_c}<sup>&#8451;</sup>
                </Typography>
                <div className={classes.temp}>
                    {conditionText}

                </div>
                <Hours tileData={tileData}/>

            </Paper>

        </div>

    )
}


export default withStyles(styles)(Today)