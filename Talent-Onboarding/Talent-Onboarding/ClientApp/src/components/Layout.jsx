import React, { Component } from 'react';
import { Container } from 'reactstrap';

import Sematic_NavBar from './Sematic_NavBar';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <Sematic_NavBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
