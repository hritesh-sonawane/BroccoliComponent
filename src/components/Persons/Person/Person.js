import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  
  // new method for ref
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    // this.inputElement.focus();   // old method for ref
    this.inputElementRef.current.focus();   // new method for ref
  }

  render() {
    console.log('[Person.js] rendering..');

    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated!</p> : <p>Please login</p>}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name}
          // ref={(inputEl) => {this.inputElement = inputEl;}}   // old method
          ref={this.inputElementRef}   // new method
        />
      </Aux>
    );
  }
};

// to verify if right props are passed on
Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
