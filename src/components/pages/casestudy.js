import React, { Component } from 'react';
import Plx from 'react-plx';


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
    return (


      <Plx
      className='MyAwesomeParallax'
      parallaxData={ parallaxData }
      >
      <p>I am a user experience professional with 20+ years in design, branding and web development for both B2B and B2C applications. I collaboratively work with the business and technology teams in an Agile environment to design and deliver experiences that get to the core need of the end user. My goal is to ensure the organization I work for adheres to an outside-in approach to "user-centric" design.</p>
      </Plx>

    );
  }
}

export default Casestudy;
