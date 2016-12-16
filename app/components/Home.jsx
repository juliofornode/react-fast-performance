import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import YouTube from './YouTube';
import IconText from './IconText';
import GitHub from './GitHub';

export default class Home extends Component {
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
