import React, {useEffect, useState} from 'react'
import { Button, Modal, Form, Dropdown } from 'semantic-ui-react'
import axios from 'axios'


const Test = () => {

    const [sales, setSales] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [stores, setStores] = useState([]);
    const [loading, setLoading] = useState(false);

    // const custOptions =[{}]

    useEffect(() => {
        fetchData()
    }, [])

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
    
        setLoading(false);
        console.log("loading: " + loading)
        
    };

   const custOptions = customers.map(x => ({
    key: x.id,
    value: x.id,
    text: x.name

   }))


    return(
        <div>
            <label>Options</label>
            <Form>
            <Dropdown
                placeholder='Select Customer'
                fluid
                selection
                options ={custOptions}
            />


            </Form>
        </div>
    )

}

export default Test;