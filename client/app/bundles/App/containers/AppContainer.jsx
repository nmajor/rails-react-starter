import React from 'react';
import { connect } from 'react-redux';
// import App from '../components/HelloWorld';
import * as actions from '../actions';

const AppContainer = ({ name, updateName }) => (
  <div>
    Hi from the app container
  </div>
);

AppContainer.propTypes = {};

const mapStateToProps = (state) => {
  return { name: state.name };
};

export default connect(mapStateToProps, actions)(AppContainer);
