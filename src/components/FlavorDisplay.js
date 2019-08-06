import React from 'react'

import Flavors from './Flavors'

const FlavorDisplay = (props) => {
    return(
        <div className='container d-inline-block flavorDisplay'>
            <Flavors 
                flavors={props.flavors}
                onFlavorSelectHandler={props.onFlavorSelectHandler}
                selectedFlavor={props.selectedFlavor}
                />
        </div>
    )
}

export default FlavorDisplay