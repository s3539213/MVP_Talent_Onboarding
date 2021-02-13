import React, { useEffect, useState } from 'react';
import {Button, Input} from 'semantic-ui-react'
import axios from 'axios'
const Test = () => {
    const [name, setName] = useState();

    const fetchData = async () => {
       
        const res = await axios.get('/Customers/GetCustomer/1');
        console.log(res.data);
        const cust = res.data
        console.log(cust.id)
        console.log(cust.name)
        setName(cust.name)
        
        
      };

    const handleClick = (e, ) => {
        fetchData()
    }

    return(
     <div>
    <Button onClick={handleClick}>HI</Button>
    <input defaultValue ={name} ></input>
    </div>   
    )
}

export default Test;