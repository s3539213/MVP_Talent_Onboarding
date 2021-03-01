import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Dropdown, Select } from 'semantic-ui-react'
import DropOptions from './DropOptions'
import axios from 'axios'




const NewSalesModal = (props) => {
const { open,customers,products, stores, toggleModal, fetchData } = props;
const [custId, setCustId] = useState();
const [prodId, setProdId] = useState();
const [storeId, setStoreId] = useState();
const [salesDate, setSalesDate] = useState();



  useEffect(() => {
    // 
    // console.log("date: " + salesDate)
  }, [])

  const setOptions = (obj) => {return obj.map(x => ({key:x.id, value:x.id, text: x.name}))}

  const setNewCust = (e, data) =>{
    setDate()
    setCustId(data.value)
    console.log(custId)
  }
  const setNewProd = (e, data) =>{
  
    setProdId(data.value)
    console.log(prodId)
    
  }
  const setNewStore = (e, data) =>{
    setStoreId(data.value)
    // console.log(custId)
  }
  

  const getCurrentDate = () =>{
    // setSalesDate(new Date())
    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`
    // setSalesDate(date)
    return date
  }

  const setDate = () =>{setSalesDate(new Date())}

  const test = (e, data)=>{
    console.log(data.value);
  }

 

  const createSales = () => {
    
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
          setCustId(null)
          setProdId(null)
          setStoreId(null)
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
      <Modal.Header>Create New Sale</Modal.Header>
      <Modal.Content>
          <Form>
          <label><h3>Current Date: </h3> {getCurrentDate()}</label>
            <Form.Field>
              
              <label>Customer:</label>
              <Dropdown placeholder="Select Customer" defaultValue="" selection fluid options={setOptions(customers)} onChange={setNewCust} value={custId}/>
            </Form.Field>
            <Form.Field>
              <label>Product:</label>
              <Dropdown placeholder="Select Product" selection fluid options={setOptions(products)} onChange={setNewProd} value={prodId}/>
            </Form.Field>
            <Form.Field>
              <label>Store:</label>
              <Dropdown placeholder="Select Customer" selection fluid options={setOptions(stores)} onChange={setNewStore} value={storeId}/>
            </Form.Field>

        </Form> 
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => toggleModal()}>
          Cancel
        </Button>
        <Button
          content="Create New Sale"
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