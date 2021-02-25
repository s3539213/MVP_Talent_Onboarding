import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Select } from 'semantic-ui-react'

import axios from 'axios'




const NewSalesModal = (props) => {
const { open,customers,products, stores, toggleModal, fetchData } = props;
const [custId, setCustId] = useState();
const [prodId, setProdId] = useState();
const [storeId, setStoreId] = useState();
const [salesDate, setSalesDate] = useState();

  useEffect(() => {
    // console.log(name)

  }, [])

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
  

  const getCurrentDate = () =>{
    const current = new Date();
    // setSalesDate(current)
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`
   
    return date
  }

  const test = (e)=>{
    console.log(e.target.value);
  }

 

  const createSales = () => {
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
          datesold: salesDate
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
      <Modal.Header>Create New Sales</Modal.Header>
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
        <Button color='black' onClick={() => toggleModal()}>
          Cancel
        </Button>
        <Button
          content="Create New Sales"
          labelPosition='right'
          icon='checkmark'
          onClick={() => createSales()}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default NewSalesModal;