import React from 'react';
import "./Info.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    flex: 1,
    paddingLeft: "80px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Info () {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="info">
          <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          ABout
        </Typography>
        <Typography variant="h5" component="h2">
          Health{bull}care
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          OBJECTIVE
        </Typography>
        <Typography variant="body2" component="p">

          <br />
          {'"We give you direct access to doctors specialized in various concerns you are in need of. Health care makes it possible to get consultations on health, with highly experienced doctors from all over the world."'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
