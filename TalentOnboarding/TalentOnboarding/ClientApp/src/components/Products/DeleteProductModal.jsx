import React from 'react'
import { Button, Modal} from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteProductModal = (props) => {
const {open, toggleDelete, pid, fetchData } = props;

const deleteProduct = () =>{
  //console.log("del " + pid)
  axios
    .delete(`/Products/DeleteProducts/${pid}`)
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
      <Modal.Header>Delete Product</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button color = 'red' onClick={() => deleteProduct()}>Delete Product</Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteProductModal;