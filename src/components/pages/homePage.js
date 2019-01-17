import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Plx from 'react-plx'; //https://www.npmjs.com/package/react-plx
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  item: {
    zIndex: '9999'
  },
  paperPadding: {
      padding: '30',
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
});

// An array of parallax effects to be applied - see below for detail
const parallaxData = [
  {
    start: 0,
    end: 500,
    properties: [
      {
        startValue: 1,
        endValue: 1,
        property: 'scale',
      },
    ],
  },
];



class Homepage extends Component {
  render() {

    const { classes } = this.props;


    return (


      <Grid container className={classes.container} spacing={24}>
        <Grid item md={4} className={classes.item}>
          <Plx className='MyAwesomeParallax' parallaxData={ parallaxData }>
            <p>I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications. I collaboratively work with the business and technology teams in an Agile environment to design and deliver experiences that get to the core need of the end user. My goal is to ensure the organization I work for adheres to an outside-in approach to "user-centric" design.</p>
         </Plx>
        </Grid>
        <Grid item md={4} className={classes.item}>
          <Plx className='MyAwesomeParallax' parallaxData={ parallaxData }>
            <p>I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications. I collaboratively work with the business and technology teams in an Agile environment to design and deliver experiences that get to the core need of the end user. My goal is to ensure the organization I work for adheres to an outside-in approach to "user-centric" design.</p>
         </Plx>
        </Grid>
        <Grid item md={4} className={classes.item}>
          <Plx className='MyAwesomeParallax' parallaxData={ parallaxData }>
            <p>I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications. I collaboratively work with the business and technology teams in an Agile environment to design and deliver experiences that get to the core need of the end user. My goal is to ensure the organization I work for adheres to an outside-in approach to "user-centric" design.</p>
         </Plx>
        </Grid>

    </Grid>


    );
  }
}


export default withStyles(styles)(Homepage);
