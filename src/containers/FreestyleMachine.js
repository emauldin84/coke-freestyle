import React, { Component } from 'react'
import FlavorDisplay from '../components/FlavorDisplay'

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
                r: 100,
                g: 96,
                b: 31
            },
            sprite: {
                r: 96,
                g: 100,
                b: 82
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
        chosenFlavor: {
            r: null,
            g: null,
            b: null,
        },
        mixedFlavors: [],
        displayColor: null,

    }

    render() {

        return(
            <div className="h-75 d-inline-block container freestyleMachine">
                <FlavorDisplay flavors={this.state.flavors}/>
            </div>
        )
    }
}

export default FreestyleMachine