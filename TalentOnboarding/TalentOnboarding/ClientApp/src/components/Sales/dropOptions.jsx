import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const dropOptions = (props) => {
    const {type, obj} = props;
    const [typeText, setTypeText] = useState();

    const getTypeText = () =>{

        if(type == "customers"){setTypeText("Customer")}
        else if (type == "products"){setTypeText("Product")}
        else{setTypeText("Store")}

        return "Select " + typeText
    }
    const setOptions = () =>{
        obj.map((x) => [{key: x.id, value:x.id, text:x.name}] )

    }


    // return(
    //     <Dropdown
    //         placeholder={getTypeText}

    // )

}




export default dropOptions;