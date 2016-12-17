import React from 'react';
import Card from './Card';
import Workflow from './Workflow';

const AboutWorkflow = () => (
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
);

export default AboutWorkflow;
