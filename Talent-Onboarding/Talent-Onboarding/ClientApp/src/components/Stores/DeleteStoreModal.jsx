import React, {useEffect, useState} from 'react'
import { Button,Modal,} from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteStoreModal = (props) => {
const {open, toggleDelete, stid, fetchData } = props;

const deleteStore = () =>{
  //console.log("del " + id)
  axios
    .delete(`/Stores/DeleteStore/${stid}`)
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
      <Modal.Header>Delete Store</Modal.Header>
      <Modal.Content>
        <h3>Are you sure?</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button 
          content="Delete Store"
          labelPosition='right'
          onClick={() => deleteStore()}
          positive

        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteStoreModal;