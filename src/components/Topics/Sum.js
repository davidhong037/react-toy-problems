import React, { Component } from 'react';

class Sum extends Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange1 = (e) => {
        this.setState({ ...this.state, number1: parseInt(e.target.value) })
    }

    handleChange2 = (e) => {
        this.setState({ ...this.state, number2: parseInt(e.target.value) })
    }

    sumValue = (e) => {
        this.setState({ ...this.state, sum: this.state.number1 + this.state.number2 })
    }

    render() {
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={ this.handleChange1 }></input>
                <input className='inputLine' onChange={ this.handleChange2 }></input>
                <button className='confirmationButton' onClick={ this.sumValue }>Add</button>
                <span className='resultsBox'>Sum: { this.state.sum }</span>
            </div>
        )
    }

}

export default Sum