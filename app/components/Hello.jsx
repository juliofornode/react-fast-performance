import React, {PropTypes} from 'react';

const Hello = (props) => {
  return (
    <h3>{props.greet}, {props.message}</h3>
  );
}

Hello.propTypes = {
  greet: PropTypes.string,
  message: PropTypes.string
};

export default Hello;
