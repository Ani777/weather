import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Today from "../today";
import Tomorrow from "../tomorrow";
import TenDays from "../tenDays";
import NotFound from "../notFound";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 700,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: theme.spacing.unit*2
    },
});

class Weather extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme, current, forecast, found } = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="Today" />
                        <Tab label="Tomorrow" />
                        <Tab label="10 days" />
                    </Tabs>
                </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={this.state.value}
                        onChangeIndex={this.handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction}>{found?<Today current={current} forecast={forecast}/> :<NotFound/>}
                        </TabContainer>
                        <TabContainer dir={theme.direction}>{found?<Tomorrow current={current}
                                                                      forecast={forecast}/>:<NotFound/>}</TabContainer>
                        <TabContainer dir={theme.direction}>{found?<TenDays forecast={forecast}/>:<NotFound/>}</TabContainer>
                    </SwipeableViews>

            </div>
        );
    }
}


export default withStyles(styles, { withTheme: true })(Weather);
