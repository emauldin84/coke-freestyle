import React from 'react'

import Flavors from './Flavors'

const FlavorDisplay = (props) => {
    return(
        <div className='container d-inline-block flavorDisplay'>
            <Flavors flavors={props.flavors}/>
        </div>
    )
}

export default FlavorDisplay