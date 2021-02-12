  import React, { Component } from 'react';
  import { Icon, Menu, Table, Button } from 'semantic-ui-react'
  import NewCustomerModal from './NewCustomerModal'
  import axios from 'axios';


  export class CustomerCopy extends Component {
    static displayName = CustomerCopy.name;
    constructor(props){
      super(props);
      this.state = { customers: [], loaded: false, openCreateModal: false};
    }

    componentDidMount()
    {
      this.fetchData();
    }

    fetchData = () =>{
      console.log("test fetchdata");
      axios
        .get("/Customers/GetCustomer")
        .then((res) =>{
          console.log(res.data);
          this.setState({
            customers: res.data,
            loaded: true
          })
          
        })
        .catch((error) => {
          console.log(error);
        })
    }

    toggleModal = () => {
      this.setState({
        openCreateModal: !this.state.openCreateModal
      })
    }

    deleteCustomer = (id) => {
      axios
        .delete(`/Customers/DeleteCustomer/${id}`)
        .then((res) => {
          console.log(res);
          this.fetchData();
        })
        .catch((error) => {
          console.log(error);
        })
    }

    render () {
      const customers =  this.state.customers;
      const loaded = this.state.loaded;
      const openCreateModal = this.state.openCreateModal
      if (loaded){
        return (
          <div>
            <NewCustomerModal open={openCreateModal} toggleModal={this.toggleModal} fetchData={this.fetchData}/>
            <h1>Customer</h1>
            <Button color = 'blue' onClick={this.toggleModal}>New Customer</Button>
            <br></br>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Address</Table.HeaderCell>
                  <Table.HeaderCell>Actions</Table.HeaderCell>
                  
                </Table.Row>
              </Table.Header>

              <Table.Body>
              {customers.map((c)=>{
                return (
                <Table.Row>
                  <Table.Cell>{c.name}</Table.Cell>
                  <Table.Cell>{c.address}</Table.Cell>
                  <Table.Cell>
                  <Button color = 'yellow'>Edit</Button>
                  <Button color = 'red' onClick={() => this.deleteCustomer(c.id)}>Delete</Button>
                  </Table.Cell>
                  
                  
                  
                </Table.Row>
                  )
                })}  
              </Table.Body>

              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                      <Menu.Item as='a'>1</Menu.Item>
                      <Menu.Item as='a'>2</Menu.Item>
                      <Menu.Item as='a'>3</Menu.Item>
                      <Menu.Item as='a'>4</Menu.Item>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </div>
        );
      }
      else{
        return(
          <div>
            <p>loading......</p>
          </div>
        )
      }
    }
  }
