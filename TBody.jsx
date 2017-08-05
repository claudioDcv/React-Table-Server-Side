import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TR from './TR';
import { makeKey } from './core/core';

class TBody extends Component {
  render() {
    return (
      <tbody>
        {this.props.tableState.dataset.results.map((e, key) => (
          <TR
            key={makeKey(key)}
            element={e}
            tableState={this.props.tableState}
            updateState={this.props.updateState}
          />))
        }
      </tbody>
    );
  }
}

TBody.propTypes = {
  updateState: PropTypes.func,
  tableState: PropTypes.object,
};

export default TBody;
