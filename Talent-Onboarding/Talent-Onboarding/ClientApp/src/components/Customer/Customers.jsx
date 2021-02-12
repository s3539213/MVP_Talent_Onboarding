import React, { Component, useEffect, useState } from 'react';
import { Icon, Menu, Table, Button} from 'semantic-ui-react'
import NewCustomerModal from './NewCustomerModal'
import PaginationCust from '../PaginationsCust'
import axios from 'axios';
import CustomerContent from './CustomersContent';

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(2);
  
  console.log(loading)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('/Customers/GetCustomer');

      setCustomers(res.data);
      setLoading(false);
      
    };
    fetchData();
  }, []);

  console.log(loading)
  // Get current posts
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(customers)
  return (
    <div className='container mt-5'>
      
      <CustomerContent customers={currentCustomers} loading={loading} />
      <PaginationCust 
        itemsPerPage={customersPerPage}
        totalitems={customers.length}
        paginate={paginate}
      /> 
    </div>
  );
};

export default Customer;