import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import { NavLink, withRouter } from 'react-router-dom'

export default class Sematic_NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          as={NavLink} to="/"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/customers"
          name='customers'
          active={activeItem === 'customers'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/products"
          name='products'
          active={activeItem === 'products'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/stores"
          name='stores'
          active={activeItem === 'stores'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={NavLink} to="/sales"
          name='sales'
          active={activeItem === 'sales'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}