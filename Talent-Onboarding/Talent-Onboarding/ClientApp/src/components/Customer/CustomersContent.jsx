import React, {useEffect, useState} from 'react'
import { Button, Header, Image, Modal, Form, Table, Menu, Icon } from 'semantic-ui-react'
import EditCustomerModal from './EditCustomerModal'
import DeleteCustomerModal from './DeleteCustomerModal'

import axios from 'axios'


const CustomerContent = (props) => {
const {customers, loading, fetchData} = props;
const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);

const [cid, setcid] = useState([])
const [cname, setcname] = useState([])
const [caddress, setcaddress] = useState([])


const toggleEdit = () =>{
  setOpenEditModal(!openEditModal)
  //console.log("modal: " + openCreateModal)
}

const toggleDelete = () =>{
  setOpenDeleteModal(!openDeleteModal)
  //console.log("modal: " + openCreateModal)
}



const fetchCustomers = async (id, cname, caddress) => {
  console.log("edit")
  setcid(id)
  setcname(cname)
  setcaddress(caddress)
  toggleEdit()
  
}

const deleteCustomer = (id) =>{
  console.log("delete")
  setcid(id)
  toggleDelete()
}

// const fetchCustomer = async () => {
//   setLoading(true);
//   const res = await axios.get('/Customers/GetCustomer');
//   setCustomers(res.data);
//   setLoading(false);
  
// };

    if(loading){
        return <h2>Loading...</h2>;
    }
    
    return(
        <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {customers.map((c)=>{
            return (
            <Table.Row>
              <Table.Cell>{c.name}</Table.Cell>
              <Table.Cell>{c.address}</Table.Cell>
              <Table.Cell>
              
              <Button color = 'yellow' onClick={() => fetchCustomers(c.id, c.name, c.address)}>Edit</Button>
              <EditCustomerModal open={openEditModal} toggleEdit={toggleEdit} cid={cid} cname={cname} caddress={caddress} fetchData={fetchData}/>
              <Button color = 'red' onClick={() => deleteCustomer(c.id)}>Delete</Button>
              <DeleteCustomerModal open={openDeleteModal} toggleDelete={toggleDelete} cid={cid} fetchData={fetchData}/>
              </Table.Cell>
              
              
              
            </Table.Row>
              )
            })}  
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        </div>
    );
}

export default CustomerContent;