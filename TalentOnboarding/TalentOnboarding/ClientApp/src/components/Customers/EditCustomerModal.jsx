import React, {useEffect, useState} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const EditCustomerModal = (props) => {
const {open, toggleEdit, cid, cname, caddress,fetchData } = props;

const [newName, setNewName] = useState();
const [inputName, setInputName] = useState();
const [inputAddress, setInputAddress] = useState(caddress);
const [newAddress, setNewAddress] = useState();

const editCustomer = (id) => {

console.log(inputName + " " + inputAddress)
  if(!inputName || !inputAddress){
    alert ("Please complete all fields")
  }
  else{
    setNewName(inputName)
    setNewAddress(inputAddress)
    console.log(newName + " " + newAddress)
    axios
      .put(`/Customers/PutCustomers/${id}`, {
        id: id,
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
  useEffect(() => {
    
  }, [])

 
  return (
    <Modal
      open={open}
    >
      <Modal.Header>Edit Customer</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input defaultValue={cname} onChange ={(e) => setInputName(e.target.value)} onBlur={(e) => setNewName(e.target.value) }/>
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input defaultValue={caddress} onChange ={(e) => setInputAddress(e.target.value)} onBlur={(e) => setNewAddress(e.target.value) } />
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleEdit()}>
          Cancel
        </Button>
        <Button
          content="Edit Customer"
          labelPosition='right'
          icon='checkmark'
          onClick={() => editCustomer(cid)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditCustomerModal;