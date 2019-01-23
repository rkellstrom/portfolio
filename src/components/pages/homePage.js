import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import { withStyles } from '@material-ui/core/styles';
import Plx from 'react-plx'; //https://www.npmjs.com/package/react-plx
import Typography from '@material-ui/core/Typography';
import Timeline from './historytimeline';
import SvgIcon from '@material-ui/core/SvgIcon';



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
});



// An array of parallax effects to be applied - see below for detail
const rowease = [
  {
    start: 0,
    end: 0,
    properties: [
      {
        startValue: 100,
        endValue: 0,
        property: "translateY"
      },

    ],
  },
];
const row2ease = [
  {
    start: 0,
    end: 400,
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
const row3ease = [
  {
    start: 0,
    end: 1200,
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



class Homepage extends Component {
  render() {

    const { classes } = this.props;


    return (


      <Grid container className={classes.container} spacing={0}>
        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ rowease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="10%" stopColor={"#3023AE"} />
                <stop offset="60%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </SvgIcon>
          </Grid>
            <span className="skillTitle">Front-End Development</span>
            <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>
          </Plx>
        </Grid>

        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ rowease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={"#3023AE"} />
                <stop offset="70%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </SvgIcon>
          </Grid>
          <span className="skillTitle">UX Design</span>

            <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>

         </Plx>
        </Grid>
        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ rowease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={"#3023AE"} />
                <stop offset="70%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
            </SvgIcon>
          </Grid>
          <span className="skillTitle">Illustration</span>
          <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>         </Plx>
        </Grid>
        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ row2ease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={"#3023AE"} />
                <stop offset="70%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
            </SvgIcon>
          </Grid>
          <span className="skillTitle">Interaction Design</span>
          <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>         </Plx>
        </Grid>
        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ row2ease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={"#3023AE"} />
                <stop offset="70%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </SvgIcon>
          </Grid>
          <span className="skillTitle">Product Management</span>
          <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>         </Plx>
        </Grid>
        <Grid item sm={4} className={classes.item}>
          <Plx className='row1Parallax' parallaxData={ row2ease }>
            <Grid justify="center" container className="skillblocks">
            <SvgIcon className={classes.icon}
              component={svgProps => (
          <svg {...svgProps}>
            <defs>
              <linearGradient id="gradient1">
                <stop offset="30%" stopColor={"#3023AE"} />
                <stop offset="70%" stopColor={"#DB00FF"} />
              </linearGradient>
            </defs>
            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
          </svg>
        )}><path d="M9 13.75c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zM9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm7.04 6.81c1.16.84 1.96 1.96 1.96 3.44V19h4v-1.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z" />
            </SvgIcon>
          </Grid>
          <span className="skillTitle">Inclusive Design</span>
          <p align="center">I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications.</p>
         </Plx>
        </Grid>
          <Plx className='row1Parallax' parallaxData={ row3ease }>
            <Grid item md={12} className={classes.item} align="center">
            <Timeline />
            </Grid>
          </Plx>
    </Grid>


    );
  }
}


export default withStyles(styles)(Homepage);
