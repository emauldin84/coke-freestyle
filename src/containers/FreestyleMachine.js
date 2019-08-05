import React, { Component } from 'react'
import FlavorDisplay from '../components/FlavorDisplay'
import DrinkDisplay from '../components/DrinkDisplay'
import PourSelection from '../components/PourSelection'


class FreestyleMachine extends Component {
    state = {
        flavors: {
            cokeClassic: {
                r: 51,
                g: 11,
                b: 12
            },
            fanta: {
                r: 252,
                g: 129,
                b: 2
            },
            minuteMaid: {
                r: 255,
                g: 244,
                b: 79
            },
            sprite: {
                r: 244,
                g: 255,
                b: 219
            },
            melloYello: {
                r: 223,
                g: 255,
                b: 0
            },
            hiC: {
                r: 206,
                g: 54,
                b: 46
            },
            cherryCoke: {
                r: 161,
                g: 14,
                b: 32
            },
            redPowerade: {
                r: 146,
                g: 36,
                b: 35
            },
            bluePowerade: {
                r: 50,
                g: 123,
                b: 181
            },
        },
        selectedFlavor: {
            flavor: null,
            r: null,
            g: null,
            b: null,
        },
        mixedFlavors: [],
        displayColor: null,

    }

    onFlavorSelectHandler = (flavor, color) => {
        this.setState({
            selectedFlavor: {
                ...this.state.selectedFlavor,
                flavor: flavor,
                r: color.r,
                g: color.g,
                b: color.b,
            }
        })
    }

    onPourSelectionHandler = () => {
        let addingFlavor = {r: this.state.selectedFlavor.r, g: this.state.selectedFlavor.g, b: this.state.selectedFlavor.b}
        let addedMixedFlavors = this.state.mixedFlavors.concat(addingFlavor)
        this.setState({
            mixedFlavors: addedMixedFlavors
        },
        () => {
            let redArr = []
            let greenArr = []
            let blueArr = []
            this.state.mixedFlavors.forEach(color => {
                redArr.push(color.r)
                greenArr.push(color.g)
                blueArr.push(color.b)
            })
            let redTotal = 0
            for(let i = 0; i < redArr.length; i++) {
                redTotal += redArr[i]
            }
            let redAvg = redTotal/redArr.length
    
            let greenTotal = 0
            for(let i = 0; i < greenArr.length; i++) {
                greenTotal += greenArr[i]
            }
            let greenAvg = greenTotal/greenArr.length
    
            let blueTotal = 0
            for(let i = 0; i < blueArr.length; i++) {
                blueTotal += blueArr[i]
            }
            let blueAvg = blueTotal/blueArr.length
    
            let mixedColor = {r: redAvg, g: greenAvg, b: blueAvg}
    
            this.setState({
                displayColor: mixedColor
            })
        })
    }
    onClearSelectionsHandler = () =>{
        this.setState({
            mixedFlavors: [],
            displayColor: null,
            selectedFlavor: {
                ...this.state.selectedFlavor,
                flavor: null,
                r: null,
                g: null,
                b: null,
            }
        })
    }

    render() {

        return(
            <div className="h-75 d-inline-block container freestyleMachine">
                <FlavorDisplay 
                    flavors={this.state.flavors}
                    onFlavorSelectHandler={this.onFlavorSelectHandler}
                    />
                <PourSelection clicked={this.onPourSelectionHandler} selectedFlavor={this.state.selectedFlavor}/>
                <DrinkDisplay mixedDrink={this.state.displayColor} clicked={this.onClearSelectionsHandler}/>

            </div>
        )
    }
}

export default FreestyleMachine