import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';



const StyledH1 = styled.h1`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 30px;
`
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: '5px',
    },
    media: {
      height: 150,
      backgroundPosition: 'center top',
    },
    actions: {
        justifyContent: 'center',
    },
    name:{
        fontSize: '14px',
        justifyContent: 'center',
        textAlign: 'center',
    }
  });

const Players = ({players, addTitular, addSubstitute}) => {
    const classes = useStyles();
    return(
        <Grid container>
            <Grid item md={12} xs={12} lg={12}>
                <StyledH1>Players: {players && players.length}</StyledH1>
            </Grid>
                {players && players.map((player, key) => {
                    return(
                    <Grid item xs={6} sm={3} md={2} lg={1} spacing={2} key={key}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={player.photo}
                                title={player.name}
                                />
                                <CardContent>
                                <Typography className={classes.name} gutterBottom variant="h5" component="h2">
                                    {player.name}
                                </Typography>
                               
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.actions}>
                                <Button onClick={() => addTitular(player)} size="small" color="secondary">
                                T
                                </Button>
                                <Button onClick={() => addSubstitute(player)} size="small" color="primary">
                                S
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    )
                })}
        </Grid>
    )
}
const mapStateToProps = state => ({
        players: state.players
})
const mapDispatchToProps = dispatch => ({
        addTitular(player){
            dispatch({
                type: 'ADD_TITULAR',
                player
            })
        },
        addSubstitute(player){
            dispatch({
                type: 'ADD_SUBSTITUTE',
                player
            })
        }
})

export default connect(mapStateToProps, mapDispatchToProps)(Players);