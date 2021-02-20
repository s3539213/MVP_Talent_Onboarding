import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react'
import axios from 'axios';

import CstmPagination from '../CstmPaginations'
import NewProductModal from './NewProductModal'
import ProductsContent from './ProductsContent'



const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);
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
    const res = await axios.get('/Products/GetProducts');
    setProducts(res.data);
    setLoading(false);
    
  };
  // Get current posts
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(products)
  return (
    <div className='container mt-5'>
      <NewProductModal open={openCreateModal} toggleModal={toggleModal} fetchData={fetchData}/>
      <h1>Product</h1>
      <Button color = 'blue' onClick={toggleModal}>New Product</Button>
        <br></br>

      <ProductsContent products={currentProducts} loading={loading} fetchData={fetchData} type={"Products"} />
      <CstmPagination itemsPerPage={productsPerPage} totalitems={products.length} paginate={paginate} type={"Products"} /> 
    </div>
  );
};

export default Products;