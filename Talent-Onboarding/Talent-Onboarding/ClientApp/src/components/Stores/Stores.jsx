import React, { useEffect, useState } from 'react';
import {Button} from 'semantic-ui-react'
import PaginationCust from '../PaginationsCust'
import NewStoreModal from './NewStoreModal'
import StoresContent from './StoresContent'
import axios from 'axios';


const Stores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [storesPerPage] = useState(10);
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
    const res = await axios.get('/Stores/GetStore');
    setStores(res.data);
    setLoading(false);
    
  };
  // Get current posts
  const indexOfLastStore = currentPage * storesPerPage;
  const indexOfFirstStore = indexOfLastStore - storesPerPage;
  const currentStores = stores.slice(indexOfFirstStore, indexOfLastStore);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
  // console.log(stores)
  return (
    <div className='container mt-5'>
      <NewStoreModal open={openCreateModal} toggleModal={toggleModal} fetchData={fetchData}/>
      <h1>Stores</h1>
      <Button color = 'blue' onClick={toggleModal}>New Store</Button>
        <br></br>

      <StoresContent stores={currentStores} loading={loading} fetchData={fetchData} />
      <PaginationCust 
        itemsPerPage={storesPerPage}
        totalitems={stores.length}
        paginate={paginate}
      /> 
    </div>
  );
};

export default Stores;