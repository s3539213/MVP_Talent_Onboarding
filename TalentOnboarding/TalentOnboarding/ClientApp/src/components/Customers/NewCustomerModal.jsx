import React, {useEffect, useState} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'



const NewCustomerModal = (props) => {
const { open, toggleModal, fetchData } = props;
const [name, setname] = useState();
const [address, setaddress] = useState();

  useEffect(() => {
    console.log(name)

  }, [name])

  const createCustomer = () => {
    if(!name || !address){
      alert ("Please complete all fields")
    }
    else{
      axios
      .post('/Customers/PostCustomers', {
        name: name,
        address: address,
      })
      .then((res) => {
        console.log(res);
        fetchData();
        toggleModal();
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
      <Modal.Header>Create New Customer</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Frank Sinatra' onBlur={(e) => setname(e.target.value) }/>
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input placeholder='12 Derby Rd, Frankston North, VIC, 3200'  onBlur={(e) => setaddress(e.target.value) } />
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleModal()}>
          Cancel
        </Button>
        <Button
          content="Create New Customer"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createCustomer()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default NewCustomerModal;