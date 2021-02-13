import React, {useState} from 'react'
import { Button, Table, } from 'semantic-ui-react'
import NumberFormat from 'react-number-format'
import EditProductModal from './EditProductModal'
import DeleteProductModal from './DeleteProductModal'

import axios from 'axios'


const ProductsContent = (props) => {
const {products, loading, fetchData} = props;
const [openEditModal, setOpenEditModal] = useState(false);
const [openDeleteModal, setOpenDeleteModal] = useState(false);

const [pid, setpid] = useState([])
const [pname, setpname] = useState([])
const [pprice, setpprice] = useState([])


const toggleEdit = () =>{
  setOpenEditModal(!openEditModal)
  //console.log("modal: " + openCreateModal)
}

const toggleDelete = () =>{
  setOpenDeleteModal(!openDeleteModal)
  //console.log("modal: " + openCreateModal)
}

const fetchProducts = async (id, pname, pprice) => {
  console.log(pprice)
  setpid(id)
  setpname(pname)
  setpprice(pprice)
  toggleEdit()
  
}

const deleteProduct = (id) =>{
  console.log("delete")
  setpid(id)
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
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              
            </Table.Row>
          </Table.Header>

          <Table.Body>
          {products.map((p)=>{
            return (
            <Table.Row>
              {/* /{console.log(p.name + " " + p.price)} */}
              <Table.Cell>{p.name}</Table.Cell>
              <Table.Cell><NumberFormat value={p.price} displayType={'text'} thousandSeparator={true} decimalSeparators={true} decimalScale={2} fixedDecimalScale={true} prefix={'$'}/></Table.Cell>
              <Table.Cell>
              
              <Button color = 'yellow' onClick={() => fetchProducts(p.id, p.name, p.price)}>Edit</Button>
              <EditProductModal open={openEditModal} toggleEdit={toggleEdit} pid={pid} pname={pname} pprice={pprice} fetchData={fetchData}/>
              <Button color = 'red' onClick={() => deleteProduct(p.id)}>Delete</Button>
              <DeleteProductModal open={openDeleteModal} toggleDelete={toggleDelete} pid={pid} fetchData={fetchData}/>
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

export default ProductsContent;