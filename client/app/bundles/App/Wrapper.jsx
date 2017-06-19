import React from 'react';
import { connect } from 'react-redux';

const Wrapper = (props) => {
  return (<div>
    wrapper
    {props.children}
  </div>);
};

Wrapper.propTypes = {};

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps)(Wrapper);
