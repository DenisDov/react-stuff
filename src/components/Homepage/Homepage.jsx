import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestApiData } from './HomepageActions';

class Homepage extends Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  persons = item => <p key={item.id}>{item.title}</p>;

  render() {
    const {
      HomepageReducer: { data },
    } = this.props;
    return data.length ? (
      <div>{data.map(this.persons)}</div>
    ) : (
      <span>loading...</span>
    );
    // return <p>sdlfmlsd</p>;
  }
}

// const mapStateToProps = state => ({ data: state.HomepageReducer });

function mapStateToProps(state) {
  return {
    HomepageReducer: state.HomepageReducer,
  };
}

const mapDispatchToProps = {
  requestApiData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Homepage);
