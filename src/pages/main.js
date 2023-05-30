import React, { Component } from 'react';
import { Container } from './styles';
import Dashboard from '../components/dashboard';

export default class Main extends Component{

  render() {
    return (
      <Container>
        <Dashboard />
      </Container>
    );
  }
}