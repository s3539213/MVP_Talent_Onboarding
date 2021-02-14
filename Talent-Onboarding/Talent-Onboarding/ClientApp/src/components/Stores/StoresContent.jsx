import React, { useState} from 'react'
import { Button,Table,} from 'semantic-ui-react'
import EditStoreModal from './EditStoreModal'
import DeleteStoreModal from './DeleteStoreModal'

const StoresContent = (props) => {
const {stores, loading, fetchData} = props;
const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);

const [stid, setstid] = useState([])
const [stname, setstname] = useState([])
const [staddress, setstaddress] = useState([])


const toggleEdit = () =>{
  setOpenEditModal(!openEditModal)
  //console.log("modal: " + openCreateModal)
}

const toggleDelete = () =>{
  setOpenDeleteModal(!openDeleteModal)
  //console.log("modal: " + openCreateModal)
}

const fetchStores = async (id, stname, staddress) => {
  console.log("edit")
  setstid(id)
  setstname(stname)
  setstaddress(staddress)
  toggleEdit()
  
}

const deleteStore = (id) =>{
  console.log("delete")
  setstid(id)
  toggleDelete()
}


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
          {stores.map((st)=>{
            return (
            <Table.Row>
              <Table.Cell>{st.name}</Table.Cell>
              <Table.Cell>{st.address}</Table.Cell>
              <Table.Cell>
              
              <Button color = 'yellow' onClick={() => fetchStores(st.id, st.name, st.address)}>Edit</Button>
              <EditStoreModal open={openEditModal} toggleEdit={toggleEdit} stid={stid} stname={stname} staddress={staddress} fetchData={fetchData}/>
              <Button color = 'red' onClick={() => deleteStore(st.id)}>Delete</Button>
              <DeleteStoreModal open={openDeleteModal} toggleDelete={toggleDelete} stid={stid} fetchData={fetchData}/>
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

export default StoresContent;