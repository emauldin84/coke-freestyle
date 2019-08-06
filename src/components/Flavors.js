import React from 'react'

const Flavors = (props) => {
    let flavors = props.flavors
    console.log('props.selectedFlavor', props.selectedFlavor)

    let flavorsDisplay = Object.entries(flavors).map(([flavor, color]) => {
        
        return (
            <div 
                className={props.selectedFlavor.flavor === flavor ? 'active flavor' : 'flavor'} 
                key={flavor}
                // style={{backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`}}
                onClick={() => props.onFlavorSelectHandler(flavor, color)}>
                <img src={color.logoUrl} alt={flavor} className='logo'></img>

            </div>

        )
    })

    return (
        <div className='container d-flex flex-wrap justify-content-around' >
            {flavorsDisplay}
        </div>

    )
}

export default Flavors