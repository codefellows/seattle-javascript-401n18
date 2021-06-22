import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Person from './Person.js';
import {get} from './store/family-store';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function Family() {

  const dispatch = useDispatch();
  const family = useSelector( (state) => state.family )
  const classes = useStyles();

  function showAll() {
    // dispatch the get() action
    dispatch( get() );
  }

  function showParents() {
    // dispatch the get('parent') action
    dispatch( get('parent') )
  }

  function showChildren() {
    // dispatch the get('child') action
    dispatch( get('child') )
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <div>
        <button onClick={showAll}>All</button>
        <button onClick={showParents}>Parents</button>
        <button onClick={showChildren}>Children</button>
      </div>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {family.map((data,idx) => (
            <Grid key={idx} item>
              <Person person={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Family;
