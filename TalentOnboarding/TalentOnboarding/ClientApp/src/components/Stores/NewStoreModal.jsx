import React, {useEffect, useState} from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'
import axios from 'axios'



const NewStoreModal = (props) => {
const { open, toggleModal, fetchData } = props;
const [name, setname] = useState();
const [address, setaddress] = useState();

  useEffect(() => {
    console.log(name)

  }, [name])

  const test = (e)=>{
    console.log(e.target.value);
  }

  const createStore = () => {
    if(!name || !address){
      alert ("Please complete all fields")
    }
    else{
      axios
      .post('/Stores/PostStores', {
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
      <Modal.Header>Create New Store</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Frankston North Store' onBlur={(e) => setname(e.target.value) }/>
            </Form.Field>
            <Form.Field>
              <label>Address</label>
              <input placeholder='18 Derby Rd, Frankston North, VIC, 3200'  onBlur={(e) => setaddress(e.target.value) } />
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleModal()}>
          Cancel
        </Button>
        <Button
          content="Create New Store"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createStore()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default NewStoreModal;