import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "1rem",
  },
  media: {
    height: 140,
  },
  keyboard: {
    backgroundColor: "pink"
  }
});

function Person(props) {

  const classes = useStyles();

  console.log(props.person)

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.keyboard}>
        <CardMedia
          className={classes.media}
          image={`https://source.unsplash.com/random?${props.person.role}`}
          title="Teacher"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.person.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Nothing to say here
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Person;
