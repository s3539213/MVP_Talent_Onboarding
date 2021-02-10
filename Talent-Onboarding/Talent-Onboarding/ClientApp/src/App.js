import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Customer } from './components/Customers';
import { Product } from './components/Products';
import { Store } from './components/Stores';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/customers' component={Customer}/>
        <Route path='/products' component={Product}/>
        <Route path='/stores' component={Store}/>
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
