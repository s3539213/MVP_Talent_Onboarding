import React, {useEffect, useState} from 'react'
import { Button,  Modal, } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteSaleModal = (props) => {
const {open, toggleDelete, sid, fetchData } = props;

const deleteSale = (id) =>{
  //console.log("del " + id)
  axios
    .delete(`/Sales/DeleteSales/${id}`)
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
      <Modal.Header>Delete Sale</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button 
          content="Delete Sale"
          labelPosition='right'
          onClick={() => deleteSale(sid)}
          positive

        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteSaleModal;