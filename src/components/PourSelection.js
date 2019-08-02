import React from 'react'

const PourSelection = (props) => (

    <button className='pourSelection' disabled={!props.selectedFlavor.flavor} onClick={props.clicked}>Push</button>
    
)



export default PourSelection