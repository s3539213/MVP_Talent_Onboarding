import React, {useEffect, useState} from 'react'
import { Button, Label, Input, Modal, Form } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const EditProductModal = (props) => {
const {open, toggleEdit, pid, pname, pprice,fetchData } = props;

const [newName, setNewName] = useState();
const [newPrice, setNewPrice] = useState();

const checkInput = () =>{
  
 /*if no changes on both field have been made:
    setNewName = pname AND setNewPrice = pprice

    if only 1 field has beed changed:
      setNewName = pname OR setNewPrice = pprice

    if both fields are emptity: 
    setNewName = pname AND setNewPrice = pprice

 */
} 

const editProduct = () => {
  
  if(!newName || !newPrice){
    alert ("Input Fields detected as empty")
  }
  else{
    console.log("edit")
    console.log(newName + " " + newPrice + " " + pid)
    axios
      .put(`/Products/PutProductS/${pid}`, {
        id: pid,
        name: newName,
        price: newPrice,
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
  const test = (e) =>{
    console.log(e.target.value);
  }
  const setName = (e) =>{
    setNewName(e.target.value)
  }
  const setPrice = (e) =>{
    setNewPrice(e.target.value)
  }


  useEffect(() => {
    
  }, [])

 
  return (
    <Modal
      open={open}
    >
      <Modal.Header>Edit Product</Modal.Header>
      <Modal.Content>
          <Form>
            <Form.Field>
              <label>Name</label>
              <Input defaultValue={pname} onChange ={test} onBlur={setName}/>
            </Form.Field>
            <Form.Field>
            <Input labelPosition='right' type='text' placeholder='Amount'>
              <Label basic>$</Label>
              {/* <input defaultValue={pprice} onChange ={(e) => setInputPrice(e.target.value)} onBlur={(e) => setNewPrice(e.target.value) }/> */}
              <NumberFormat thousandSeparator={true} defaultValue={pprice} decimalSeparators={true} decimalScale={2} fixedDecimalScale={true} onChange ={test} onBlur={setPrice}/>
              <Label></Label>
            </Input>
            </Form.Field>
        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleEdit()}>
          Cancel
        </Button>
        <Button
          content="Edit Product"
          labelPosition='right'
          icon='checkmark'
          onClick={() => editProduct()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditProductModal;