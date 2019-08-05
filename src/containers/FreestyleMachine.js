import React, { Component } from 'react'
import FlavorDisplay from '../components/FlavorDisplay'
import DrinkDisplay from '../components/DrinkDisplay'
import PourSelection from '../components/PourSelection'
import Logo from '../components/Logo'


class FreestyleMachine extends Component {
    state = {
        flavors: {
            cokeClassic: {
                r: 51,
                g: 11,
                b: 12,
                logoUrl: 'https://i.pinimg.com/originals/d9/6e/57/d96e57166d3f6ddf3c24eb95b7706f39.jpg',
            },
            fanta: {
                r: 252,
                g: 129,
                b: 2,
                logoUrl: 'https://banner2.kisspng.com/20180329/cdq/kisspng-fizzy-drinks-pepsi-fanta-logo-complementary-colors-samosa-5abc9a629dbf65.5419487115223097306461.jpg',
            },
            minuteMaid: {
                r: 255,
                g: 244,
                b: 79,
                logoUrl: 'http://hollycrab.com/lowell/wp-content/uploads/sites/3/2016/09/Lemonade.jpg',
            },
            sprite: {
                r: 244,
                g: 255,
                b: 219,
                logoUrl: 'https://seeklogo.com/images/S/sprite-logo-C7F60368F3-seeklogo.com.png',
            },
            melloYello: {
                r: 223,
                g: 255,
                b: 0,
                logoUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/7/7f/Mello_Yello_70s.png/revision/latest/scale-to-width-down/2000?cb=20100825154647',
            },
            hiC: {
                r: 206,
                g: 54,
                b: 46,
                logoUrl: 'https://vignette.wikia.nocookie.net/logopedia/images/8/83/Hi-c.svg/revision/latest/scale-to-width-down/250?cb=20180207112943',
            },
            cherryCoke: {
                r: 161,
                g: 14,
                b: 32,
                logoUrl: 'https://images-na.ssl-images-amazon.com/images/I/51dghGZYPYL.jpg',
            },
            redPowerade: {
                r: 146,
                g: 36,
                b: 35,
                logoUrl: 'http://www.eatfunfoods.com/img-PoweadeFruitPunchStock.JPG',
            },
            bluePowerade: {
                r: 50,
                g: 123,
                b: 181,
                logoUrl: 'http://www.eatfunfoods.com/med-img-PoweradeMountainBlastStock.jpg',
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
                <Logo />
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