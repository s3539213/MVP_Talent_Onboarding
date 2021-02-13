import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react'
import NewCustomerModal from './NewCustomerModal'
import PaginationCust from '../PaginationsCust'
import axios from 'axios';
import CustomersContent from './CustomersContent';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  
  useEffect(() => {
    fetchData();
  }, []);

  const toggleModal = () =>{
    setOpenCreateModal(!openCreateModal)
    //console.log("modal: " + openCreateModal)
  }

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get('/Customers/GetCustomer');
    setCustomers(res.data);
    setLoading(false);
    
  };
  // Get current posts
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(customers)
  return (
    <div className='container mt-5'>
      <NewCustomerModal open={openCreateModal} toggleModal={toggleModal} fetchData={fetchData}/>
      <h1>Customer</h1>
      <Button color = 'blue' onClick={toggleModal}>New Customer</Button>
        <br></br>

      <CustomersContent customers={currentCustomers} loading={loading} fetchData={fetchData} />
      <PaginationCust 
        itemsPerPage={customersPerPage}
        totalitems={customers.length}
        paginate={paginate}
      /> 
    </div>
  );
};

export default Customer;