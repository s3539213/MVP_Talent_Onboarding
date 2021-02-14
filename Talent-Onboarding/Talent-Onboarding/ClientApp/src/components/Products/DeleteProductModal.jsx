import React, {useEffect, useState} from 'react'
import { Button, Header, Image, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteProductModal = (props) => {
const {open, toggleDelete, pid, fetchData } = props;

const deleteProduct = () =>{
  //console.log("del " + pid)
  axios
    .delete(`/Products/DeleteProduct/${pid}`)
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
      <Modal.Header>Delete Product</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button 
          content="Delete Product"
          labelPosition='right'
          onClick={() => deleteProduct()}
          positive

        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteProductModal;