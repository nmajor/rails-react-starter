import React, { Component } from 'react';

import { connect } from 'react-redux';
// import App from '../components/HelloWorld';
import * as actions from '../actions';

class Splash extends Component {
  render() {
    return (
      <div>
        Hi from the splash container
      </div>
    );
  }
}

Splash.propTypes = {};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Splash);
