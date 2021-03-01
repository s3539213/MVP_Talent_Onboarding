import React, {useEffect, useState} from 'react'
import { Button, Dropdown, Input, Modal, Form } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import axios from 'axios'
//import { FetchData } from '../FetchData';


const EditSalesModal = (props) => {
  const {open, toggleEdit,customers,products, stores, sid, cid, pid, stid, sdate, fetchData } = props;

  const [custId, setCustId] = useState();
  const [prodId, setProdId] = useState();
  const [storeId, setStoreId] = useState();
  const [salesDate, setSalesDate] = useState();

  const setOptions = (obj) => {return obj.map(x => ({key:x.id, value:x.id, text: x.name}))}
  const setNewCust = (e, data) =>{setCustId(data.value)}
  const setNewProd = (e, data) =>{setProdId(data.value)}
  const setNewStore = (e, data) =>{setStoreId(data.value)}

  const getName = (id, obj) =>{
    let itemName = ""
    obj.map((x)=> {
      if(x.id === id){
        itemName = x.name
      }
    })
    return itemName

  }

  const editSales = () => {
    // setSalesDate(getCurrentDate())
    if(!custId || !prodId || !storeId){
      alert("Fields detected as empty")
    }
    else{
      console.log("id: " + sid)
      console.log("cust: " + custId)
      console.log("prod: " + prodId)
      console.log("store: " + storeId)
      console.log("date: " + sdate)
      // console.log("date: " + salesDate)
      // console.log("!!: " + customers[0].id)

      axios
        .put(`/Sales/PutSales/${sid}`, {
          id: sid,
          customerid: custId,
          productid: prodId,
          storeid: storeId,
          datesold: sdate
        })
        .then((res) => {
          console.log(res);
          // setCustId(null)
          // setProdId(null)
          // setStoreId(null)
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
      <Modal.Header>Edit Sale</Modal.Header>
      <Modal.Content>
        <Form>
          <label><h3>Sales Date: </h3> {sdate}</label>
            <Form.Field>          
              <label>Customer:</label>
              <Dropdown placeholder={getName(cid, customers)}  selection fluid options={setOptions(customers)} onChange={setNewCust} value={custId}/>
            </Form.Field>
            <Form.Field>
              <label>Product:</label>
              <Dropdown placeholder={getName(pid, products)} selection fluid options={setOptions(products)} onChange={setNewProd} value={prodId}/>
            </Form.Field>
            <Form.Field>
              <label>Store:</label>
              <Dropdown placeholder={getName(stid, stores)}  selection fluid options={setOptions(stores)} onChange={setNewStore} value={storeId}/>
            </Form.Field>
        </Form> 
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={() => toggleEdit()}>Cancel</Button>
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