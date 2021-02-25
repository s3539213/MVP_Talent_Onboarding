import React, { useState} from 'react'
import { Button,Table,} from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
// import EditStoreModal from './EditStoreModal'
import DeleteSalesModal from './DeleteSalesModal'

const SalesContent = (props) => {
const {sales,customers, products, stores, loading, fetchData} = props;
const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);

const [sid, setsid] = useState([])
const [sname, setsname] = useState([])
const [saddress, setstaddress] = useState([])

console.log("sales: " + sales.data)
const toggleEdit = () =>{
  setOpenEditModal(!openEditModal)
  //console.log("modal: " + openCreateModal)
}

const toggleDelete = () =>{
  setOpenDeleteModal(!openDeleteModal)
  //console.log("modal: " + openCreateModal)
}

const getCustName = (id) =>{
  let custname = ""
  customers.map((x)=> {
    if(x.id === id){
      custname = x.name
    }
  })
  return custname
}


const getProd = (id) =>{
  let prod = ""
  products.map((x)=> {
    if(x.id === id){
      prod = x.name
    }
  })
  return prod
}


const getStore = (id) =>{
  let store = ""
  stores.map((x)=> {
    if(x.id === id){
      store = x.name
    }
  })
  return store
}


const fetchsales = async (id, sname, staddress) => {
  console.log("edit")
  setsid(id)
  setsname(sname)
  setstaddress(staddress)
  toggleEdit()
  
}

const deleteSales = (id) =>{
  console.log("delete")
  setsid(id)
  toggleDelete()
}

const dateFormat = (date) =>{
  const fdate = new Date(date)
  return `${fdate.getDate()}-${fdate.getMonth()+1}-${fdate.getFullYear()}`

}


    if(loading){
        return <h2>Loading...</h2>;
    }
    
    return(
        <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Store</Table.HeaderCell>
              <Table.HeaderCell>Date Sold</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {sales.map((s)=>{ 
           
            return (
            <Table.Row>
              
              <Table.Cell>{getCustName(s.customerid)}</Table.Cell>
              <Table.Cell>{getProd(s.productid)}</Table.Cell>
              <Table.Cell>{getStore(s.storeid)}</Table.Cell>
              <Table.Cell>{dateFormat(s.datesold)}</Table.Cell>
              <Table.Cell>
              
              <Button color = 'yellow' onClick={() => fetchsales(s.id, s.name, s.address)}>Edit</Button>
              {/* <EditStoreModal open={openEditModal} toggleEdit={toggleEdit} sid={sid} sname={sname} staddress={staddress} fetchData={fetchData}/> */}
              <Button color = 'red' onClick={() => deleteSales(s.id)}>Delete</Button>
              <DeleteSalesModal open={openDeleteModal} toggleDelete={toggleDelete} sid={sid} fetchData={fetchData}/>
              </Table.Cell>
              
              
              
            </Table.Row>
              )
            })}  
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        </div>
    );
}

export default SalesContent;