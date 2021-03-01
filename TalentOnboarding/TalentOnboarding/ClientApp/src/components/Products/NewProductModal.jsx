import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Label, Input } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import axios from 'axios'



const NewProductModal = (props) => {
const { open, toggleModal, fetchData } = props;
const [name, setName] = useState();
const [price, setPrice] = useState();

  useEffect(() => {
    console.log(name)

  }, [name])

  const test = (e)=>{
    console.log(e.target.value);
  }

  const setNewName = (e) =>{
    setName(e.target.value)
  }
  const setNewPrice = (e) =>{
    setPrice(e.target.value)
  }


  const createProduct = () => {
    if(!name || !price){
      alert ("Please complete all fields")
    }
    else{
      axios
      .post('/Products/PostProducts', {
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
              <Input placeholder="Potatoes" onChange ={test} onBlur={setNewName}/>
            </Form.Field>
            <Form.Field>
            <Input labelPosition='right' type='text' placeholder='Amount'>
              <Label basic>$</Label>
              <NumberFormat thousandSeparator={true} decimalSeparators={true} decimalScale={2} fixedDecimalScale={true} onChange ={test} onBlur={setNewPrice}/>
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