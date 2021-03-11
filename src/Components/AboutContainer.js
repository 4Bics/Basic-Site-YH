import {Container, Segment, Tab, Accordion, Icon} from 'semantic-ui-react';

function AboutContainer () {

  const panes = [
    { menuItem: 'Yoor Diet', render: () => <Tab.Pane>The perception of a standard Healthy Diet is becoming more challenged based on growing evidence of variable impacts to individual metabolic responses. A number of studies demonstrate high interpersonal variability in Postprandial Glycemic Responses (PPGRs) to the same food. Which dispels the generalisation that all foods have equal health benefits. YOOR Diet provides curated lists of beneficial foods and stay away foods based on CGM data set results.</Tab.Pane> },
    { menuItem: 'Yoor Levels', render: () => <Tab.Pane>CGM demonstrates which foods are scoring well and which ones aren’t, this helps individuals make better food choices. Seeing low metabolic health scores drives behaviour. Providing instantly accessible metabolic data makes you more conscious and thoughtful of what types of food you consume, having actionable data - guides behaviour and drives results.</Tab.Pane> },
    { menuItem: 'Yoor Health', render: () => <Tab.Pane>Todays populations has an insatiable addiction to mobile devices and on average refer to browsing every hour throughout the day, this gives a real opportunity to drive behavioural change through YOOR Health (YH) mobile app. YH is a consistent reference point and call to action based on metabolic scores through their food and drink consumption, receiving realtime  information to food we consume and the impact on blood sugar levels will help influence dietary choices for the long term.
    </Tab.Pane> },
  ]

  return (
    <Container style={{backgroundColor: 'rgb(8, 9, 18)', margin: '40px 0px', padding: '60px'}}>
        <Tab panes={panes}/>
    </Container>
  )
}

export default AboutContainer;