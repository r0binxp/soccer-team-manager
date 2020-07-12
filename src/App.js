import React from 'react';
import store from './store'
import Players from './components/Players'
import { Provider } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Titulars from './components/Titulares'
import Substitutes from './components/Substitutes'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
   textAlign: 'center',
   fontSize: '40px',
   fontFamily: 'Tahoma',
  },
  container: {
    backgroundColor: '#efefef'
  }
 
});

const App = () => {
  const classes = useStyles();
  return(
  <Provider store={store}>
    <Grid container className={classes.container}>
      <Grid item md={12}>
        <h1 className={classes.title}>Soccer Manager</h1>
      </Grid>
      <Grid item md={12}>
        <Players/>  
        <Titulars/> 
        <Substitutes/> 
      </Grid>
    </Grid>
  </Provider>
  )
}

export default App;
