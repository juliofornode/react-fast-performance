import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import YouTube from './YouTube';
import IconText from './IconText';
import GitHub from './GitHub';
import Workflow from './Workflow';
import ButtonDemo from './ButtonDemo';
import Button from './Button';
import Input from './Input';
import InputLabel from './InputLabel';
import InputField from './InputField';
import { series, singleSeries, cloudSeries } from '../fixtures/charts';

const {
  // main component
  Chart,
  // graphs
  Bars, Cloud, Labels, Lines, Pies, RadialLines, Ticks,
  // wrappers
  Layer, Animate, Transform
} = require('rumble-charts');


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { series, cloudSeries, singleSeries, hovered: {} };
    this.updateSeries = this.updateSeries.bind(this);
  }

  updateSeries = () => {
    const singleSeries = [{
      data: _.map(_.range(3), () => Math.random() * 100)
    }];
    const series = _.map(_.range(3), () => ({
      data: _.map(_.range(3), () => Math.random() * 100)
    }));
    this.setState({ series, cloudSeries, singleSeries, hovered: {} });
  }

  render() {
    return(
      <section className="landing">
        <nav className="nav">
          <a className="nav__brand" href="/">
            React
          </a>
          <a className="nav__link"
            href="#">
              City
          </a>
          <a className="nav__link"
            href="#">
              Code
          </a>
          <a className="nav__link"
            href="#">
              Demos
          </a>
          <a className="nav__link" href="#">
            Website
          </a>
        </nav>

        <section className="stripe">

          <Card plain className="text--center">
            <a href="#"
              className="image__link">
              <img width="200" src="app/public/img/city-612-792.jpg" />
            </a>
          </Card>

          <Card plain className="col--half text--center">
            <h1>Develop Awesome Apps</h1>
            <p className="subtext">
              With React, Redux and ES6.
            </p>
          </Card>

        </section>

        <section className="stripe back--default">

          <Card plain className="col--half text--center">
            <h1>Custom React Component</h1>
            <p className="subtext">
              This custom component demonstrates props, state,
              and ES6 classes.
            </p>
          </Card>

          <Card className="col--one-third text--center back--white">
            <World />
          </Card>

        </section>

        <section className="stripe">
          <Card plain
            className="col--one-third text--center back--white">
              <YouTube videoid="tuK6n2Lkza0" />
          </Card>
          <Card plain className="col--half text--center">
            <h1>Embed React Components</h1>
            <p className="subtext">
              This custom component demonstrates media
              embed within custom React component.
            </p>
          </Card>
        </section>

        <section className="stripe back--default">
          <Card className="col--one-third text--center back--white">
            <IconText className="primary" icon="globe" size="5x"
              text="Nine Component Creation Strategies" />
          </Card>
          <Card className="col--one-fourth back--white">
            <h3>
              <IconText slim className="danger" icon="building"
                text="Modular Architecture" />
            </h3>
            <h3>
              <IconText slim className="success" icon="cloud"
                text="Leverages Cloud" />
            </h3>
            <h3>
              <IconText slim className="secondary" icon="cog"
                text="30 Custom Components" />
            </h3>
            <h3>
              <IconText slim className="warning" icon="bullseye"
                text="Goal Oriented Design" />
            </h3>
          </Card>
          <Card plain className="col--one-third text--center">
            <h1>Font Awesome</h1>
            <p className="subtext">
              The popular CSS library transformed into a custom reusable React component.
            </p>
          </Card>
        </section>

        <section className="stripe">
          <Card className="col--quarter text--center back--default">
            <GitHub repo="angular/angular" />
          </Card>
          <Card className="col--quarter text--center back--default">
            <GitHub repo="facebook/react" />
          </Card>
          <Card className="col--quarter text--center back--default">
            <GitHub repo="meteor/meteor" />
          </Card>
        </section>

        <section className="stripe back--default">
          <Card plain className="col--half text--center">
            <h1>Custom Project Workflow Component</h1>
            <p className="subtext">
              Displays the tasks and subtasks included in a project.
            </p>
          </Card>
          <Card className="col--one-third back--success">
            <Workflow />
          </Card>
        </section>

        <section className="stripe">

          <Card className="col--one-third text--center back--white">
            <p>Click does not do much...</p>
            <Button label="Default" color="default" />
            <Button label="Primary" color="primary" />
            <Button label="Secondary" color="secondary" />
            <Button label="Warning" color="warning" />
            <Button label="Success" color="success" />
            <Button label="Danger" color="danger" />
          </Card>

          <Card className="col--quarter text--center back--white">
            <ButtonDemo
              colors={['Primary', 'Success', 'Danger', 'Warning']}
            />
          </Card>

          <Card className="text--center back--white">
            <ButtonDemo
              colors={['Secondary', 'Success', 'Danger', 'Warning']}
              sizes={['large', 'medium', 'medium', 'small']}
              icons={['coffee', 'cloud', 'flash', 'plug']}
              iconOnly
            />
          </Card>

        </section>

        <section className="stripe back--default">
                  <Card plain className="col--one-third text--center">
                    <h1>Responsive Forms</h1>
                    <p className="subtext">
                      Using variations of input controls and buttons.
                    </p>
                  </Card>
                  <Card className="col--quarter back--white">
                    <Input>
                      <InputLabel label="Name" icon="user" />
                      <InputField placeholder="Placeholder for name" />
                    </Input>
                    <Input>
                      <InputLabel label="Street"/>
                      <InputField placeholder="Enter street address" />
                    </Input>
                    <Input>
                      <InputField placeholder="Just a field" />
                    </Input>
                  </Card>
                  <Card className="back--white">
                    <Input>
                      <InputField />
                      <Button color="success" icon="search" />
                    </Input>
                    <Input>
                      <Button color="primary" icon="cloud" label="Connect" />
                      <InputField placeholder="Enter server address" />
                    </Input>
                    <Input>
                      <InputLabel icon="envelope" />
                      <InputField placeholder="Send a note" />
                      <Button color="warning" label="Send" />
                    </Input>
                  </Card>
                </section>

        <section className="stripe">
          <Card className="back--white">
            <Chart onClick={this.updateSeries} width={300} height={200} series={this.state.series}>
              <Transform method={['transpose', 'stackNormalized']}>
                <Pies
                  colors="category10"
                  combined
                  innerRadius="33%"
                  padAngle={0.025}
                  cornerRadius={5}
                  innerPadding={2}
                  pieAttributes={{
                    /* eslint-disable no-return-assign, no-param-reassign */
                    onMouseMove: (e) => e.target.style.opacity = 1,
                    onMouseLeave: (e) => e.target.style.opacity = 0.5
                    /* eslint-enable no-return-assign, no-param-reassign */
                  }}
                  pieStyle={{ opacity: 0.5 }}
                />
              </Transform>
            </Chart>

          </Card>
          <Card className="back--white">
            <Chart
              onClick={this.updateSeries}
              width={300}
              height={200}
              series={this.state.series}
              minY={0}
            >
              <Animate _ease="bounce" _ease="elastic">
                <Layer width="80%" height="80%" position="middle center">
                  <Ticks
                    axis="y"
                    ticks={{ maxTicks: 4 }}
                    tickVisible={({ tick }) => tick.y > 0}
                    lineLength="100%"
                    lineVisible
                    lineStyle={{ stroke: 'lightgray' }}
                    labelStyle={{
                      textAnchor: 'end',
                      alignmentBaseline: 'middle',
                      fontSize: '0.5em',
                      fill: 'lightgray'
                    }}
                    labelAttributes={{ x: -5 }}
                  />
                  <Ticks
                    axis="x"
                    label={({ tick }) => tick.x + 1}
                    labelStyle={{
                      textAnchor: 'middle',
                      alignmentBaseline: 'before-edge',
                      fontSize: '0.5em',
                      fill: 'lightgray'
                    }}
                    labelAttributes={{ y: 3 }}
                  />
                  <Bars
                    groupPadding="3%"
                    innerPadding="0.5%"
                    barAttributes={{
                      /* eslint-disable no-return-assign, no-param-reassign */
                      onMouseMove: e => e.target.style.fillOpacity = 1,
                      onMouseLeave: e => e.target.style.fillOpacity = 0.5
                      /* eslint-enable no-return-assign, no-param-reassign */
                    }}
                    barStyle={{
                      fillOpacity: 0.5
                    }}
                  />
                  <Lines lineWidth={2} />
                  <Labels
                    label={({ point }) => (`y=${Math.round(point.y)}`)}
                    dotStyle={{
                      textAnchor: 'middle',
                      dominantBaseline: 'text-after-edge',
                      fontFamily: 'sans-serif',
                      fontSize: '0.65em'
                    }}
                    labelAttributes={{
                      y: -4
                    }}
                  />
                </Layer>
              </Animate>
            </Chart>
          </Card>
          <Card className="back--white">
            <Chart
              onClick={this.updateSeries}
              width={300}
              height={200}
              series={this.state.series}
              minY={0}
            >
              <RadialLines />
            </Chart>
          </Card>
        </section>

        <section className="stripe back--default">
          <Card>
            <Chart
              onClick={this.updateSeries}
              width={300}
              height={200}
              series={this.state.singleSeries}
              minY={0}
            >
              <Transform method={['transpose']}>
                <Layer width="80%" height="80%">
                  <Bars />
                </Layer>
                <Layer width="25%" height="25%" position="right bottom">
                  <Transform method="stack">
                    <Pies
                      combined
                      colors="category10"
                      pieStyle={{ opacity: 0.8 }}
                    />
                  </Transform>
                </Layer>
              </Transform>
            </Chart>
          </Card>
          <Card>
            <Chart
              onClick={this.updateSeries}
              width={300}
              height={200}
              series={this.state.series}
              minY={0}
            >
              <Transform method={['transpose', 'stack']}>
                <Pies
                  combined
                  innerPadding="3%"
                  innerRadius="20%"
                />
              </Transform>
            </Chart>
          </Card>
          <Card>
            <Chart
              onClick={this.updateSeries}
              width={300}
              height={200}
              series={this.state.cloudSeries}
              minY={0}
            >
              <Transform method="transpose">
                <Cloud
                  font="Arial"
                  minFontSize={12}
                  maxFontSize={36}
                  padding={2}
                />
              </Transform>
            </Chart>
          </Card>
        </section>

        <section className="stripe--slim back--gray">

          <Card plain className="col--full text--center white">
          <p>
            Copyright 2016.
          </p>
          </Card>

        </section>
      </section>
    );
  }
}
