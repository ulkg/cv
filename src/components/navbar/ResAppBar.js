import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    AppBar, Toolbar, Typography, List, ListItem,
    withStyles, Grid, SwipeableDrawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink as Link } from 'react-router-hash-link';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styleSheet = {
    list: {
        width: 200,
    },
    padding: {
        paddingRight: 30,
        cursor: "pointer",
    },

    sideBarIcon: {
        padding: 0,
        color: "white",
        cursor: "pointer",
    }
}

class ResAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = { drawerActivate: false, drawer: false };
        this.createDrawer = this.createDrawer.bind(this);
        this.destroyDrawer = this.destroyDrawer.bind(this);
    }

    componentWillMount() {
        if (window.innerWidth <= 600) {
            this.setState({ drawerActivate: true });
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= 600) {
                this.setState({ drawerActivate: true });
            }
            else {
                this.setState({ drawerActivate: false })
            }
        });
    }

    //Small Screens
    createDrawer() {
        return (
            <div>
                <AppBar className='grey darken-4'>
                    <Toolbar className='grey darken-4'>
                        <Grid container direction="row" justify="space-between" alignItems="center" >
                            <MenuIcon
                                className={this.props.classes.sideBarIcon}
                                onClick={() => { this.setState({ drawer: true }) }} />

                            <Typography color="inherit" variant="headline">
                                <Link to='/' className='brand-logo'>
                                    Ulrich
							    </Link>
                            </Typography>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <SwipeableDrawer
                    open={this.state.drawer}
                    onClose={() => { this.setState({ drawer: false }) }}
                    onOpen={() => { this.setState({ drawer: true }) }}>

                    <div  className='grey darken-4' style = {{ color: "white"}}
                        tabIndex={0}
                        role="button"
                        onClick={() => { this.setState({ drawer: false }) }}
                        onKeyDown={() => { this.setState({ drawer: false }) }}>

                        <List className={this.props.classes.list}>
                            <ListItem key={1} button divider> <Link to='/skills'>Skills</Link>  </ListItem>
                            <ListItem key={2} button divider> <Link to='/experiences'>Erfahrung</Link></ListItem>
                            <ListItem key={3} button divider><Link to='/educations'> Ausbildung </Link></ListItem>
                        </List>

                    </div>
                </SwipeableDrawer>

            </div>
        );
    }

    //Larger Screens
    destroyDrawer() {
        const { classes } = this.props
        return (
            <AppBar className='grey darken-4'>
                <Toolbar>
                    <Typography variant="headline" style={{ flexGrow: 1 }} color="inherit" >
                        <Link to='/' className='brand-logo'>
                        <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ paddingTop: "5px" }}
                            >
                            Ulrich
                            </IconButton>
                        </Link>
                    </Typography>

                    <Typography variant="subheading" className={classes.padding} color="inherit" >
                        <Link to='/skills'>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ paddingTop: "5px" }}
                            >
                                <Icon style={{ marginRight: "5px" }}>content_copy</Icon>
                            </IconButton>
                            Skills
                        </Link>
                    </Typography>


                    <Typography variant="subheading" className={classes.padding} color="inherit" >
                        <Link to='/experiences'>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ paddingTop: "5px" }}
                            >
                                <Icon style={{ marginRight: "5px" }}>work</Icon>
                            </IconButton>
                            Erfahrung
                        </Link>
                    </Typography>

                    <Typography variant="subheading" className={classes.padding} color="inherit" >
                        <Link to='/educations'>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ paddingTop: "5px" }}
                            >
                                <Icon style={{ marginRight: "5px" }}>school</Icon>
                            </IconButton>
                            Ausbildung
                        </Link>
                    </Typography>
                    <Typography variant="subheading" className={classes.padding} color="inherit" >
                        <Link to='/snake'>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                                style={{ paddingTop: "5px" }}
                            >
                                <Icon style={{ marginRight: "5px" }}>gamepad</Icon>
                            </IconButton>
                            Play Snake
                        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }

    render() {
        return (
            <nav>
                {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
            </nav>
        );
    }
}

ResAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};



export default withStyles(styleSheet)(ResAppBar);