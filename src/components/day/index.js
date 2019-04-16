import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Hours from "../hours";

const ExpansionPanel = withStyles({
    root: {
        border: '1px solid rgba(0,0,0,.125)',
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
    },
    expanded: {
        margin: 'auto',
    },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0,0,0,.03)',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        marginBottom: -1,
        minHeight: 56,
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';
const ExpansionPanelDetails = withStyles(theme => ({
    root: {
        padding: theme.spacing.unit * 2,
    },
}))(MuiExpansionPanelDetails);

const styles = theme => ({
    right: {
        display: 'flex',
        marginLeft: 'auto'
    },

    day: {
        textAlign: 'left'
    },
    condition: {
        fontSize: theme.spacing.unit*2,
        textAlign: 'left'
    },

    minTemp: {
        fontSize: theme.spacing.unit*2,
        textAlign: 'right'

    },
    maxTemp: {
        textAlign: 'right'
    },
    temp: {
        width: theme.spacing.unit*5
    }

});


function Day (props) {

        const { classes, date, condition, icon, maxTemp, minTemp, hour } = props;
        const today = new Date();
        const todayDate = today.getDate();


        const day = date.slice(-2);

    function getMonthName(){
        const month = date.slice(5, 7) - 1;
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

    const tileData =hour.map(item => {
        return {
            temp: item.temp_c,
            icon: item.condition.icon,
            time: item.time.slice(-5)
        }
    });


    return (
            <div>
                    <ExpansionPanel>
                        <ExpansionPanelSummary>
                            <div>
                                {Number(day)=== todayDate ? <Typography variant='h6' className={classes.day}>Today</Typography>:<Typography variant='h6' className={classes.day}>{getMonthName()} {day}</Typography>}
                                <Typography variant='caption' className={classes.condition}>{condition}</Typography>
                            </div>
                            <div className={classes.right}>
                                <img src={icon} alt='weather icon' />
                                <div className={classes.temp}>
                                    <Typography variant='h6' className={classes.maxTemp}>{maxTemp}&#176;</Typography>
                                    <Typography variant='caption' className={classes.minTemp}>{minTemp}&#176;</Typography>
                                </div>
                            </div>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Hours tileData={tileData}/>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>

            </div>
        );
}

export default withStyles(styles)(Day);

