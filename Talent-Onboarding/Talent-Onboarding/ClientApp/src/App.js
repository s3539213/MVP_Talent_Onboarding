import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
//Pages
//import { CustomerCopy} from './components/Customer/CustomersCopy';
import Customer from './components/Customer/Customers';
//import { ProductCopy } from './components/Products/ProductsCopy';
import  Product  from './components/Products/Products';
import { Store } from './components/Stores/Stores';
import { Sales } from './components/Sales/Sales';

import Test from './test';
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
        <Route path='/sales' component={Sales}/>
        <Route path='/fetch-data' component={FetchData} />

        <Route path='/test' component={Test} />
      </Layout>
    );
  }
}
