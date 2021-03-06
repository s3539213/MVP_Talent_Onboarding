import React from 'react'
import { Button,  Modal, } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteSaleModal = (props) => {
const {open, toggleDelete, sid, fetchData } = props;

const deleteSale = () =>{
  //console.log("del " + id)
  axios
    .delete(`/Sales/DeleteSales/${sid}`)
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
      <Modal.Header>Delete Sale</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>Cancel</Button>
        <Button color = 'red' onClick={() => deleteSale()}>Delete Sale</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteSaleModal;