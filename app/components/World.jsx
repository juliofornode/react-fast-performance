import React, {PropTypes, Component} from 'react';
import Hello from './Hello.jsx';

class World extends Component {
  static propTypes = {
    name: PropTypes.string,
    greeting: PropTypes.string
  }

  static defaultProps = {
    greeting: 'Hello'
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      greeting: props.greeting
    };
    this.greetInHindu = this.greetInHindu.bind(this);
    this.greetInSlang = this.greetInSlang.bind(this);
    this.setName = this.setName.bind(this);
  }

  greetInHindu() {
    this.setState({ greeting: 'Hola' });
  }

  greetInSlang() {
    this.setState({ greeting: 'Hey Yo' });
  }

  setName(eventObject) {
    this.setState({ name: eventObject.target.value });
  }

  render() {
    const CompleteGreeting =
    this.state.name ?
    `${this.state.name} says: ${this.state.greeting}` :
    this.state.greeting;

    return(
      <div className="World-card">
        <Hello greet={CompleteGreeting} message="World!" />
        <h2>
          <a onClick={this.greetInHindu}>Spanish</a>
          &nbsp; OR &nbsp;
          <a onClick={this.greetInSlang}>Slang</a>
        </h2>
        <input
          value={this.state.name}
          onChange={this.setName}
          placeholder="enter your name"
          type="text"
        >
        </input>
      </div>
    );
  }
}

export default World;
