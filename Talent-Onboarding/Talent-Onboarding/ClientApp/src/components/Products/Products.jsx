import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react'
import PaginationCust from '../PaginationsCust'
import NewProductModal from './NewProductModal'
import ProductsContent from './ProductsContent'
import axios from 'axios';


const Product = () => {
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
    const res = await axios.get('/Products/GetProduct');
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

      <ProductsContent products={currentProducts} loading={loading} fetchData={fetchData} />
      <PaginationCust 
        itemsPerPage={productsPerPage}
        totalitems={products.length}
        paginate={paginate}
      /> 
    </div>
  );
};

export default Product;