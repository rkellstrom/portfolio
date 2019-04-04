import React, { Component } from 'react';
import NavLink from './navlinks';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import Media from 'react-media';

import dude from './dude-fill-in.png';
import dude2 from './dude-fill-in-2.png';
import whiteboard from './whiteboard.png';


const styles = theme => ({
  item:{ width:"300"},
  container: {
    margin: 'auto',
    maxWidth:1024,
    flexGrow: 1,
  },
  control: {
  padding: theme.spacing.unit * 2,
  },
});

class Header extends Component {

  render() {
  const { classes } = this.props;

    return (



    <header>

      <div className="navbar">
        <Grid container className={classes.container} spacing={0}>
            <Hidden smDown>
          <Grid item xs={12} md={6} className={classes.item}>
              <ul className="social">
                <li className="twitter">
                  <SvgIcon><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/>
                </SvgIcon><a href="https://twitter.com/RichKellstrom" className="twitterlink" target="blank">@richkellstrom</a>
                </li>
                <li className="linkedIn">  <SvgIcon><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></SvgIcon>
                <a href="https://www.linkedin.com/in/richardkellstrom/" className="linkedInlink" target="blank">@richkellstrom</a></li>
              </ul>
          </Grid>
          </ Hidden>
              <Media query="(max-width: 768px)">
                {matches =>
                  matches ? (
                    <Grid item xs={12} md={6} className={classes.item} align="center">
                      <nav>
                        <ul>
                          <li><NavLink exact to="/">ABOUT ME</NavLink></li>
                          <li><NavLink to="/casestudy">MY WORK</NavLink></li>
                        </ul>
                      </nav>
                    </Grid>
                  ) : (
                    <Grid item xs={12} md={6} className={classes.item} align="right">
                      <nav>
                        <ul>
                          <li><NavLink exact to="/">ABOUT ME</NavLink></li>
                          <li><NavLink to="/casestudy">MY WORK</NavLink></li>
                        </ul>
                      </nav>
                    </Grid>
                  )
                }

              </Media>
        </Grid>
      </div>


      <h1 className="">Richard Kellstrom</h1>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon fill="white" points="0,0 0,100 100,100"/>
      </svg>

        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <img className='dude' alt='headerdude' src={dude} />
            ) : (
              <img className='dude2' alt='headerdude2' src={dude2} />
            )
          }
        </Media>
        <Hidden smDown>
        <img className='whiteboard' src={whiteboard} />
        </Hidden>

    </header>

    );
  }
}



export default withStyles(styles)(Header);
