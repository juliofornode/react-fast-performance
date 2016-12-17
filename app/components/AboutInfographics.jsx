import React from 'react';
import Card from './Card';
import IconText from './IconText';

const AboutInfographics = () => (
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
);

export default AboutInfographics;
