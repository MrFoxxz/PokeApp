import React from 'react'

import { AppBar, Typography, Toolbar } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

function NavBar( props ) {

    const { classes } = props;

    return (
        <div>
            <AppBar className={classes.NavColor} position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" component="p">
                        Poke App 
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}


export default withStyles({
    NavColor:{
        backgroundColor: "#EF5350"
    }
})(NavBar)
