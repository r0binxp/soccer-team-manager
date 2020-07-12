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


const StyledArticle = styled.article`
    width: 200px;
    margin: 15px;
    display: inline-flex;
    float: left;
    align-self: flex-start;
    flex-direction: column;
    text-align: center;
    align-items: center;
   
   
`
const StyledButtonGreen = styled.button`
    background-color: #00ff00;
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    &:hover {
       background-color: #009900 
    }
`
const StyledButtonRed = styled.button`
    background-color: #ff0000;
    padding: 10px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    &:hover {
       background-color: #990000 
    }
`
const StyledImageContainer = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 100%;
    
`
const StyledImagePlayer = styled.img`
    max-width: 120px;
    text-align: center;
`
const StyledH1 = styled.h2`
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
    },
    containerTitutlars:{
        backgroundColor: "#83cd29",
        padding: '10px'
    }
  });

const Titulares = ({titulars, delTitular}) => {
    const classes = useStyles();
    console.log("TITULARs", titulars)
    return(
        <Grid container className={classes.containerTitutlars}>
            <Grid item md={12} xs={12} lg={12}>
    <StyledH1>Titulars: {titulars && titulars.length} / 11</StyledH1>
            </Grid>
                {titulars && titulars.map((player, key) => {
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
                                <Button onClick={() => delTitular(player)} size="small" color="secondary">
                                Delete
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
        titulars: state.titulars
})
const mapDispatchToProps = dispatch => ({
        delTitular(player){
            dispatch({
                type: 'DEL_TITULAR',
                player
            })
        },
       
})

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);