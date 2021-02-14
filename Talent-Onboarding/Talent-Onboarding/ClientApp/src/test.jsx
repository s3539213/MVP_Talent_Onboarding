import React, { useEffect, useState } from 'react';
import {Button, Input} from 'semantic-ui-react'
import axios from 'axios'
import NumberFormat from 'react-number-format';
const Test = () => {
    const [name, setName] = useState();
    const [prod, setProd] = useState([]);
    
    useEffect(() =>{
        fetchData()
    },[])

    const fetchData = async () => {

        let link  = `/Products/GetProduct/1`
        const res = await  axios.get(link);
        console.log(res.data.name);
        setProd(res.data);
        
      };

    const test = (e) =>{
        console.log(e.target.value);
    }

    const handleClick = (e, ) => {
        fetchData()
    }

    return(
     <div>
    <Button onClick={handleClick}>HI</Button>
    <Input onChange={test}></Input>
    
    </div>   
    )
}

export default Test;