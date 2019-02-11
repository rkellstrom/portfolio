import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// Add Ons
import Card from '@material-ui/core/Card';
import Plx from 'react-plx'; //https://www.npmjs.com/package/react-plx
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import candiard from './img/carndia-card-header.png';
import espm from './img/espm-card-header.png';
import ffbrand from './img/ffbrand-card-header.png';

const styles = theme => ({

  item: {
    zIndex: '9999',
    background:'white',
  },
  container: {
    margin: 'auto',
    maxWidth:1024,
    flexGrow: 1,
  },
  paper: {
    padding: '30',
  },
  control: {
  padding: theme.spacing.unit * 2,
  },
  card: {
   display: 'flex',
   flexDirection: 'column',
 },
 content: {
   height: 150,
 },
 media: {
    height: 140,
  },
});



// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 5,
        property: 'scale',

      },
    ],
  },
];

class Casestudy extends Component {
  render() {

      const { classes } = this.props;

    return (

<Grid container className={classes.container} spacing={24}>
  <Grid item sm={4} className={classes.item}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={espm}
          title="My Work"
        />
      <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Energy Star Portfolio Manager
          </Typography>
          <Typography component="p">
            PG&E asked my team to design a portfolio application to manage commerical properties as a single unit...Phew.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Grid item sm={4} className={classes.item}>
    <Link to={'/'}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={candiard}
          title="Candia Road Brewing"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Candia Road Brewing Company branding
          </Typography>
          <Typography component="p">
            The team at Candia Road Brewing came to me to develop the new branding and can art. Boy did we make waves.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </Link>
  </Grid>
  <Grid item sm={4} className={classes.item}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ffbrand}
          title="FirstFuel Branding Reboot"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            FirstFuel Branding Reboot
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  </Grid>

  <Grid item sm={4} className={classes.item}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={candiard}
          title="My Work"
        />
      <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Energy Star Portfolio Manager
          </Typography>
          <Typography component="p">
            PG&E asked my team to design a portfolio application to manage commerical properties as a single unit...Phew.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  </Grid>
  <Grid item sm={4} className={classes.item}>
    <Link to={'/'}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={candiard}
          title="Candia Road Brewing"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Candia Road Brewing Company branding
          </Typography>
          <Typography component="p">
            The team at Candia Road Brewing came to me to develop the new branding and can art. Boy did we make waves.
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
    </Link>
  </Grid>
  <Grid item sm={4} className={classes.item}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={candiard}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>

    </Card>
  </Grid>
</Grid>

    );
  }
}
export default withStyles(styles)(Casestudy);
