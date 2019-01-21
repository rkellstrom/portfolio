import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


class Historytimeline extends Component {
  render() {

    const { classes } = this.props;


    return (
      <Timeline lineColor={'#666'}>
        <TimelineItem
          key="001"
          dateText="10/2012 – Present"
          dateInnerStyle={{ background: '#3023AE', color: '$red' }}
          style={{ color: '#3023AE' }}
        >
          <h3>FirstFuel Software</h3>
          <h4>Sr. UX UI Designer</h4>

          <ul>
            <li>Working with marketing teams as creative director for FirstFuel’s
branding strategy.</li>
            <li>In charge of user experience or entire SAAS platform.</li>
            <li>Responsible for design and development of entire user interface.</li>
            <li>Frontend development and prototyping using various frontend
technologies.</li>
            <li>Management of development teams in order to deliver products in
an agile environment.</li>
            <li>In charge of WCAG 2.0 and accessibility testing and certifications.</li>

          </ul>


        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="04/2009 – 11/2010"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
        <h3>FirstFuel Software</h3>
        <h4>Sr. UX UI Designer</h4>

        <ul>
          <li>Working with marketing teams as creative director for FirstFuel’s
branding strategy.</li>
          <li>In charge of user experience or entire SAAS platform.</li>
          <li>Responsible for design and development of entire user interface.</li>
          <li>Frontend development and prototyping using various frontend
technologies.</li>
          <li>Management of development teams in order to deliver products in
an agile environment.</li>
          <li>In charge of WCAG 2.0 and accessibility testing and certifications.</li>

        </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateComponent={(
            <div
              style={{
                display: 'block',
                float: 'left',
                padding: '10px',
                background: 'rgb(150, 150, 150)',
                color: '#fff',
              }}
            >
              11/2008 – 04/2009
            </div>
          )}
        >
        <h3>FirstFuel Software</h3>
        <h4>Sr. UX UI Designer</h4>

        <ul>
          <li>Working with marketing teams as creative director for FirstFuel’s
branding strategy.</li>
          <li>In charge of user experience or entire SAAS platform.</li>
          <li>Responsible for design and development of entire user interface.</li>
          <li>Frontend development and prototyping using various frontend
technologies.</li>
          <li>Management of development teams in order to deliver products in
an agile environment.</li>
          <li>In charge of WCAG 2.0 and accessibility testing and certifications.</li>

        </ul>
        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="08/2008 – 11/2008"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
        <h3>FirstFuel Software</h3>
        <h4>Sr. UX UI Designer</h4>

        <ul>
          <li>Working with marketing teams as creative director for FirstFuel’s
branding strategy.</li>
          <li>In charge of user experience or entire SAAS platform.</li>
          <li>Responsible for design and development of entire user interface.</li>
          <li>Frontend development and prototyping using various frontend
technologies.</li>
          <li>Management of development teams in order to deliver products in
an agile environment.</li>
          <li>In charge of WCAG 2.0 and accessibility testing and certifications.</li>

        </ul>
        </TimelineItem>
      </Timeline>

    );
  }
}

export default (Historytimeline);
