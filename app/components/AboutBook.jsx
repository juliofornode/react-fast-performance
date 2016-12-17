import React from 'react';
import Card from './Card';

const AboutBook = () => (
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
);

export default AboutBook;
