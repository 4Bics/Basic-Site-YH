import React, { Component } from 'react'
import { Accordion, Icon, Segment} from 'semantic-ui-react'

export default class AboutAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Segment inverted style={{backgroundColor: 'rgb(8, 9, 18)', display: 'flex', justifyContent: 'center', fontSize: '1.4em', fontFamily: 'Prompt, sans-serif'}}>
        <Accordion inverted styled style={{backgroundColor: 'rgb(8, 9, 18)', width: '1000px'}}>
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Yoor Diet
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              The perception of a standard Healthy Diet is becoming more challenged based on growing evidence of variable impacts to individual metabolic responses. A number of studies demonstrate high interpersonal variability in Postprandial Glycemic Responses (PPGRs) to the same food. Which dispels the generalisation that all foods have equal health benefits. YOOR Diet provides curated lists of beneficial foods and stay away foods based on CGM data set results.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 1}
            index={1}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Yoor Levels
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <p>
              CGM demonstrates which foods are scoring well and which ones aren’t, this helps individuals make better food choices. Seeing low metabolic health scores drives behaviour. Providing instantly accessible metabolic data makes you more conscious and thoughtful of what types of food you consume, having actionable data - guides behaviour and drives results.
            </p>
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={this.handleClick}
          >
            <Icon name='dropdown' />
            Yoor Health
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <p>
              Todays populations has an insatiable addiction to mobile devices and on average refer to browsing every hour throughout the day, this gives a real opportunity to drive behavioural change through YOOR Health (YH) mobile app. YH is a consistent reference point and call to action based on metabolic scores through their food and drink consumption, receiving realtime  information to food we consume and the impact on blood sugar levels will help influence dietary choices for the long term.
            </p>
          </Accordion.Content>
        </Accordion>
      </Segment>
    )
  }
};