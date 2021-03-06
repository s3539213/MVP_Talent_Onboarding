import React from 'react'
import { Button,  Modal, } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteCustomerModal = (props) => {
const {open, toggleDelete, cid, fetchData } = props;

const deleteCustomer = () =>{
  //console.log("del " + id)
  axios
    .delete(`/Customers/DeleteCustomers/${cid}`)
    .then((res) => {
      console.log(res);
      fetchData();
      toggleDelete();
    })
    .catch((err) => {
      console.log(err);
    });

}

  return (
    <Modal
      open={open}
    >
      <Modal.Header>Delete Customer</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>Cancel</Button>
        <Button color = 'red' onClick={() => deleteCustomer()}>Delete Customer</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteCustomerModal;