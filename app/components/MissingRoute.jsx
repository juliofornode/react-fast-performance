import React from 'react';
import Card from './Card';

function MissingRoute() {
  return (
    <section className="stripe">
      <Card plain className="col--half text--center">
        <h1>Sorry we could not find that</h1>
        <p className="subtext">
          Please use top navigation to visit what you are looking for.
        </p>
      </Card>
      
    </section>
  );
}

export default MissingRoute;
