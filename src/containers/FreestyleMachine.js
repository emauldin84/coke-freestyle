import React, { Component } from 'react'
import FlavorDisplay from '../components/FlavorDisplay'

class FreestyleMachine extends Component {

    render() {

        return(
            <div className="h-75 d-inline-block container freestyleMachine">
                <FlavorDisplay />
            </div>
        )
    }
}

export default FreestyleMachine