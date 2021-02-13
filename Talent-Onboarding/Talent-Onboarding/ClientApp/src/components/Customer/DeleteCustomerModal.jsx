import React, {useEffect, useState} from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteCustomerModal = (props) => {
const {open, toggleDelete, cid, fetchData } = props;

const deleteCustomer = (id) =>{
  //console.log("del " + id)
  axios
    .delete(`/Customers/DeleteCustomer/${id}`)
    .then((res) => {
      console.log(res);
      fetchData();
      toggleDelete();
    })
    .catch((err) => {
      console.log(err);
    });

}

  useEffect(() => {
    
  }, [])

 
  return (
    <Modal
      open={open}
    >
      <Modal.Header>Delete Customer</Modal.Header>
      <Modal.Content>
        <p>Are you sure?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button 
          content="Delete Customer"
          labelPosition='right'
          onClick={() => deleteCustomer(cid)}
          positive

        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomerModal;