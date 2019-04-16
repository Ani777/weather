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
        width: theme.spacing.unit*14

    },
    temp: {
        display: 'inline-block',
        padding: theme.spacing.unit*2,
        fontSize: theme.spacing.unit*3,
        marginRight: theme.spacing.unit*1
    }
});

function Tomorrow(props){
    const { classes, forecast } = props;
    const tileData = forecast[1] && forecast[1].hour.map(item => {
        return {
            temp: item.temp_c,
            icon: item.condition.icon,
            time: item.time.slice(-5)
        }
    });
    const src = forecast[1] && forecast[1].day.condition.icon;

    const minTemp = forecast[1] && forecast[1].day.mintemp_c;
    const maxTemp = forecast[1] && forecast[1].day.maxtemp_c;
    const conditionText = forecast[1] && forecast[1].day.condition.text;
    const date = forecast[1] && new Date(forecast[1].date.slice(0,4), forecast[1].date.slice(5,7)-1, forecast[1].date.slice(8) )
    const day = date && date.getDate();
    function getMonthName(){
        const month = date && date.getMonth();
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
                    {getMonthName()} {day}
                </Typography>
                <pre><Typography >
                    Day {maxTemp}&#176;    Night {minTemp}&#176;

                </Typography></pre>
                <div><img src={src} className={classes.image} alt='weather_icon' /></div>
                <div className={classes.temp}>
                    {conditionText}

                </div>
                <Hours tileData={tileData}/>

            </Paper>

        </div>

    )
}


export default withStyles(styles)(Tomorrow)