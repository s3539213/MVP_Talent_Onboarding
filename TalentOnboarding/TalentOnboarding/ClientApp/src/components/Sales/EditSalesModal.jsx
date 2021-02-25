import React, {useEffect, useState} from 'react'
import { Button, Label, Input, Modal, Form } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const EditSalesModal = (props) => {
const {open, toggleEdit, sid, cid, pid, stid, fetchData } = props;

const [custId, setCustId] = useState();
const [prodId, setProdId] = useState();
const [storeId, setStoreId] = useState();
const [salesDate, setSalesDate] = useState();
const checkInput = () =>{
  
 /*if no changes on both field have been made:
    setNewName = pname AND setNewPrice = pprice

    if only 1 field has beed changed:
      setNewName = pname OR setNewPrice = pprice

    if both fields are emptity: 
    setNewName = pname AND setNewPrice = pprice

 */
} 

const editSales = () => {
  setSalesDate(getCurrentDate())
  if(!custId || !prodId || !storeId){
    alert("Fields detected as empty")
  }
  else{
    console.log("cust: " + custId)
    console.log("prod: " + prodId)
    console.log("store: " + storeId)
    console.log("date: " + salesDate)
    // console.log("!!: " + customers[0].id)

    axios
      .post('/Sales/PostSales', {
        customerid: custId,
        productid: prodId,
        storeid: storeId,
        datesold: ""+ getCurrentDate()
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

const setNewCust = (e) =>{
  setCustId(e.target.value)
  console.log(custId)
}
const setNewProd = (e) =>{
  setProdId(e.target.value)
  
}
const setNewStore = (e) =>{
  setStoreId(e.target.value)
  // console.log(custId)
}


  useEffect(() => {
    
  }, [])

 
  return (
    <Modal
      open={open}
    >
      <Modal.Header>Edit Sale</Modal.Header>
      <Modal.Content>
          <Form>
          <label><h3>Current Date: </h3> {getCurrentDate()}</label>
            <Form.Field>
              
              <label>Customer:</label>
              <select onChange={setNewCust} placeholder= "DD">
              {customers.map((x) =>{
                return(<option value ={x.id}>{x.name}</option>)
              })}
              </select>
            </Form.Field>
            <Form.Field>
              <label>Product:</label>
              <select onChange={setNewProd} defaultValue= "">
              {products.map((x) =>{
                return(<option value ={x.id}>{x.name}</option>)
              })}
              </select>
            </Form.Field>
            <Form.Field>
              <label>Store:</label>
              <select onChange={setNewStore} defaultValue= "">
              {stores.map((x) =>{
                return(<option value ={x.id}>{x.name}</option>)
              })}
              </select>
            </Form.Field>

        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleEdit()}>
          Cancel
        </Button>
        <Button
          content="Edit Sale"
          labelPosition='right'
          icon='checkmark'
          onClick={() => editSales()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default EditSalesModal;