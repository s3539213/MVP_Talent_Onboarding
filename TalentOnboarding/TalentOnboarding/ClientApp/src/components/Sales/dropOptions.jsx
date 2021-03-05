import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropOptions = (props) => {
    const {type, obj} = props;
    const setOptions = obj.map(x => ({key: x.id,value: x.id,text: x.name}))

    return(
        <div>
        
        <Dropdown
            placeholder={type}
            fluid
            selection
            options = {setOptions}
        />
        </div>
    )

}




export default DropOptions;