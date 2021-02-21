import React, {useEffect, useState} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const EditStoreModal = (props) => {
const {open, toggleEdit, stid, stname, staddress,fetchData } = props;

const [newName, setNewName] = useState();
// const [inputName, setInputName] = useState();
// const [inputAddress, setInputAddress] = useState(staddress);
const [newAddress, setNewAddress] = useState();
 

useEffect(() => {
    
  }, [])


const test = (e) =>{console.log(e.target.value);}
const setName = (e) =>{setNewName(e.target.value)}
const setAddress = (e) =>{setNewAddress(e.target.value)}

 
const editStore = () => {

//console.log(inputName + " " + inputAddress)
  if(!newName || !newAddress){
    alert ("Please complete all fields")
  }
  else{
    console.log(newName + " " + newAddress)
    axios
      .put(`/Stores/PutStore/${stid}`, {
        id: stid,
        name: newName,
        address: newAddress,
      })
      .then((res) => {
        console.log(res);
        fetchData();
        toggleEdit();
      })
      .catch((err) => {
        console.log(err);
      });
  }

}


 
  return (
    <Modal
      open={open}
    >
      <Modal.Header>Edit Store</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input defaultValue={stname} onChange ={test} onBlur={setName}/>
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input defaultValue={staddress} onChange ={test} onBlur={setAddress} />
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleEdit()}>
          Cancel
        </Button>
        <Button
          content="Edit Store"
          labelPosition='right'
          icon='checkmark'
          onClick={() => editStore()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditStoreModal;