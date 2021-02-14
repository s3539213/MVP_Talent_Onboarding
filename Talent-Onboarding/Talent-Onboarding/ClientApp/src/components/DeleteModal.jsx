import React, {useEffect, useState} from 'react'
import { Button,Modal,} from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const DeleteModal = (props) => {
const {open, toggleDelete, id, fetchData, type, name } = props;
useEffect(() => {
    
}, [])


const deleteCheck =() => {
  
  if(type == "Customers"){
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
  else if (type == "Products"){
    deleteProduct()
  }
  else if (type == "Stores"){
    axios
      .delete(`/Stores/DeleteStore/${id}`)
      .then((res) => {
        console.log(res);
        fetchData();
        toggleDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  else if (type == "Sales"){
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
  else {}
}

  const deleteProduct = async() =>{
    await axios
    .delete(`/Product/DeleteProduct/${id}`)
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
      <Modal.Header>Delete {type} : {name}  </Modal.Header>
      <Modal.Content>
        <h2>Are you sure you want to delete {name} ?</h2>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleDelete()}>
          Cancel
        </Button>
        <Button 
          content="Delete Store"
          labelPosition='right'
          onClick={deleteCheck}
          positive

        />
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteModal;