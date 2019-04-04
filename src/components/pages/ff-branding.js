import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'; //https://material-ui.com
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

// Add Ons
import Plx from 'react-plx'; //https://www.npmjs.com/package/react-plx
import Media from 'react-media';
import ffNotebook from './img/ffNotebook.png';
import ffPhone from './img/ffPhone.png';
import ffTablet from './img/ffTablet.png';
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

// Images



const styles = theme => ({

  item: {
    zIndex: '9999',
    background:'$white',
  },
  control: {
  padding: theme.spacing.unit * 2,
  },
  container: {
    margin: 'auto',
    maxWidth:1024,
    flexGrow: 1,
  },
});


// An array of parallax effects to be applied - see below for detail
const phoneParallax = [
  {
    start: 0,
    end: 700,
    properties: [
      {
        startValue: 400,
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
const tabletParallax = [
  {
    start: 0,
    end: 700,
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
const notebookParallax = [
  {
    start: 0,
    end: 700,
    properties: [
      {
        startValue: 200,
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


class FfBranding extends Component {
  render() {

      const { classes } = this.props;


    return (

      <Grid container className={classes.container} spacing={24}>

      <div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={500}
          EasingType='easeInCubic'
          AnimationDuration={500}
          style={{}}
          ToggledStyle={{}}
        />
      </div>

        <Grid item sm={12} align='center' className='csheadingtext'><h1 className='CsHeader'>FIRSTFUEL COMPANY<br />REBRANDING</h1></Grid>
            <Media query="(max-width: 768px)">
              {matches =>
                matches ? (
                  <img className='ffNotebook' alt='Notebook' src={ffNotebook} />
                ) : (

                    <div className='cs_top_banner'>
                                <Plx className='phoneParallax' parallaxData={ phoneParallax }>
                                      <img className='ffPhone' alt='Phone' src={ffPhone} />
                                </Plx>
                                <Plx className='tabletParallax' parallaxData={ tabletParallax }>
                                      <img className='ffTablet' alt='Tablet' src={ffTablet} />
                                </Plx>
                                <Plx className='notebookParallax' parallaxData={ notebookParallax }>
                                      <img className='ffNotebook' alt='Notebook' src={ffNotebook} />
                                </Plx>

                    </div>

                )
              }

            </Media>
        <Grid item sm={12} className={classes.item}>

          <h3>Why the redesign?</h3>
          <p>The original website has been around since 2010 and was showing its age. With the passing of time styles change and trends fall behind only to become the things we cringe at years later. Well that is what happened to our company site. Not only was it as "in style" as plaid pants the company had changed directions. We were more mature and had different needs as a much larger corporation. Take a look at the old design vs the new... Yuck.</p>
          <h3>We got thinking</h3>
          <p>Lorem ipsum dolor sit amet, alterum denique imperdiet eum an, falli sonet in mea, illud nulla abhorreant sed te. Soleat assentior disputando in vis, movet utroque docendi eu pri. Nusquam euripidis ex sed, id vix vocibus vulputate, elit tota sonet ut duo. Nam in laoreet sadipscing signiferumque, pri dicat affert in. Tale fugit equidem ei vim, legere complectitur ea per. Tale qualisque posidonium id vix.

Et novum nemore putant pri, quo ea enim corpora. Pri eius melius te, fastidii voluptua in duo, eros utamur expetendis no vix. Ius ei hinc accusamus, dicat doming sententiae id per. At rebum minimum omnesque vel.

Sale soleat reprimique ad vel, in eam atqui causae convenire. Amet hinc ipsum ut vis, vis agam wisi accusam ut, ei sit justo fuisset. Adhuc legimus mel no. Adipisci atomorum vel eu. Illud feugait per ut. In debet dolorum voluptatibus pro, cum volumus fastidii salutatus et, possit nusquam dissentias vim an.

Ad eos assum partem, bonorum laboramus id est, sit no lorem intellegat. Id dico sententiae referrentur mea, ius integre luptatum oporteat ea, ea sit ludus munere scripserit. Duo case adipiscing in. Harum alterum qualisque te pro, eam ne sint elit paulo, cu errem assueverit per. Meliore abhorreant honestatis eam ex.

Suas facete id sit, nobis viderer vulputate pro at. Ea mea munere copiosae elaboraret, vim ea nihil utamur reprimique, cum porro nemore evertitur an. Ut per purto dicit quaerendum. Est fuisset moderatius ex, ex quod postea graeco pro. Quo esse aliquid democritum id, pri illum partem docendi cu.
          </p>
        </Grid>
      </Grid>

        );
      }
    }

export default withStyles(styles)(FfBranding);
