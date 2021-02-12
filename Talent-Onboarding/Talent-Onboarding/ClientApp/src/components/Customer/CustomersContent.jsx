import React, {useEffect, useState} from 'react'
import { Button, Header, Image, Modal, Form, Table, Menu, Icon } from 'semantic-ui-react'
import NewCustomerModal from './NewCustomerModal'

import axios from 'axios'


const CustomerContent = ({customers, loading}) => {
const toggleModal = () =>{}
const deleteCustomer = (id) =>{}

    if(loading){
        return <h2>Loading...</h2>;
    }
    
    return(
        <div>
        {/* <NewCustomerModal open={openCreateModal} toggleModal={toggleModal()} fetchData={this.fetchData}/> */}
        <h1>Customer</h1>
        <Button color = 'blue' onClick={toggleModal()}>New Customer</Button>
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
              <Button color = 'red' onClick={() => deleteCustomer(c.id)}>Delete</Button>
              </Table.Cell>
              
              
              
            </Table.Row>
              )
            })}  
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        </div>
    );
}

export default CustomerContent;