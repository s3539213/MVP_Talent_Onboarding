import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react'
import axios from 'axios';

import CstmPagination from '../CstmPaginations'
// import NewSalesModal from './NewSalesModal'
import SalesContent from './SalesContent'



const Sales = () => {
  const [sales, setSales] = useState([]);
  const [compSales, setCompSales]= useState({id: null, cust:null, prod: null,store: null, date:null})
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [salesPerPage] = useState(10);
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
    console.log("loading: " + loading)
    const resSl = await axios.get('/Sales/GetSales');
    const resCust = await axios.get(`/Customers/GetCustomers/`);
    const resProd = await axios.get(`/Products/GetProducts/`);
    const resSt = await axios.get(`/Stores/GetStores/`); 
    setSales(resSl.data);
    // console.log("Sales: " + sales)
    setCustomers(resCust.data);
    // console.log("customers: " + customers)
    setProducts(resProd.data);
    // console.log("products: " + products)
    setStores(resSt.data);
    // console.log("stores: " + stores)

    // sales.map((s) =>{
    //   let custName ='', prod='', store='';
    //   customers.filter(customer => customer.id === s.customerid).map(c => {custName = c;})
    //   products.filter(product => product.id === s.productid).map(p => {prod = p})
    //   stores.filter(store => store.id === s.storeid).map(st => {store = st})

    //   setCompSales(...setCompSales, {id: s.id, cust:custName, prod:prod, store:store, date: s.datesold})
    //   console.log(compSales)

    // })
    // console.log("compSales: " + compSales)

    setLoading(false);
    console.log("loading: " + loading)
    
  };
  // Get current posts
  const indexOfLastSales = currentPage * salesPerPage;
  const indexOfFirstSales = indexOfLastSales - salesPerPage;
  const currentSales = sales.slice(indexOfFirstSales, indexOfLastSales);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(Sales)
  return (
    <div className='container mt-5'>
      {/* <NewSalesModal open={openCreateModal} toggleModal={toggleModal} fetchData={fetchData}/> */}
      <h1>Sales</h1>
      <Button color = 'blue' onClick={toggleModal}>New Sales</Button>
        <br></br>

      <SalesContent sales={currentSales} customers={customers} products={products} stores={stores} loading={loading} fetchData={fetchData}/>
      <CstmPagination itemsPerPage={salesPerPage} totalitems={sales.length} paginate={paginate} type={"Sales"} /> 
    </div>
  );
};

export default Sales;