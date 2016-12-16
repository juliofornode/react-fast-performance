import React, { PropTypes, Component } from 'react';
import World from './World';
import Card from './Card';
import YouTube from './YouTube';

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
