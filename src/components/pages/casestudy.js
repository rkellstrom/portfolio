import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// Add Ons
import Card from '@material-ui/core/Card';
import Plx from 'react-plx'; //https://www.npmjs.com/package/react-plx
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// Images
import candiard from './img/carndia-card-header.png';
import espm from './img/espm-card-header.png';
import ffbrand from './img/ffbrand-card-header.png';
import ribbit from './img/ribbit-card-header.png';

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

const cardParallax = [
  {
    start: 0,
    end: 0,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
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
    <Plx className='row1Parallax' parallaxData={ cardParallax }>
    <Card className={classes.card,'card'}>
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
    </Plx>
  </Grid>
  <Grid item sm={4} className={classes.item}>
    <Link to={'/'}>
    <Card className={classes.card, 'card'}>
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
    <Link to={'/ff-branding'}>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ffbrand}
          title="FirstFuel Branding Reboot"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            FirstFuel Company Branding Redesign
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
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
          image={ribbit}
          title="Ribbit Branding"
        />
      <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Ribbit Branding &amp; Mobile Application
          </Typography>
          <Typography component="p">
            Ribbit is a start up who were looking for some creative direction. I helped them through the early seed funding process.
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
