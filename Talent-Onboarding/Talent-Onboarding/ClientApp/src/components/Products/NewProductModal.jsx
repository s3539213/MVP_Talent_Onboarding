import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Label, Input } from 'semantic-ui-react'
import axios from 'axios'



const NewProductModal = (props) => {
const { open, toggleModal, fetchData } = props;
const [name, setname] = useState();
const [price, setPrice] = useState();

  useEffect(() => {
    console.log(name)

  }, [name])

  const test = (e)=>{
    console.log(e.target.value);
  }

  const createProduct = () => {
    if(!name || !price){
      alert ("Please complete all fields")
    }
    else{
      axios
      .post('/Products/PostProduct', {
        name: name,
        price: price,
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
      <Modal.Header>Create New Product</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder='Potatoes' onBlur={(e) => setname(e.target.value) }/>
            </Form.Field>
            <Form.Field>
            <Input labelPosition='right' type='text' placeholder='Amount'onBlur={(e) => setPrice(e.target.value)}>
              <Label basic>$</Label>
              <input />
              <Label></Label>
            </Input>
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleModal()}>
          Cancel
        </Button>
        <Button
          content="Create New Product"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createProduct()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default NewProductModal;