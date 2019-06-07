import React from 'react'
import {CSSTransition} from 'react-transition-group'

class GameP1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inProp: false
        }
    }

    toggleinProp(){
        this.setState({
            first: !this.state.first
        })
    }

    render(){
        return(
            <div className='aquarium'>
            <div className='bottom'>
                <CSSTransition
                in={this.props.first}
                timeout={1500}
                classNames='my-node'>
                </CSSTransition>
            </div>
            <button type='button' onclick={() => this.toggleinProp()}>
                Enter
            </button>
            </div>
        )
    }
}

export default GameP1;
