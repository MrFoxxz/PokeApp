import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { Link } from 'react-router-dom'

const PokeCard = ({name , to, image, classes}) => {
    return (
        <Card className= {classes.item} >
            <CardMedia className={classes.media} image={image}/>
            <CardContent>
                <Link to={to}>
                    <Typography component="p" variant="h6">
                        {name}
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}


export default withStyles({
    item:{
        minWidth: "300px",
        textAlign: "center",
        margin: "2rem",
        padding: "1rem",
        boxSizing: "border-box"
    },
    media:{
        minHeight: "300px"
    }
})(PokeCard)
