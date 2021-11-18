import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }
    
    handleChange(inputValue) {
        this.setState({ userInput: inputValue });
    }
    
    updateEvenAndOdd(userInput) {
        const arr = userInput.split(',')
        const evenNum = []
        const oddNum = []
        
        for (let i = 0; i < arr.length; i++){
            if (arr[i] % 2 === 0) {
                evenNum.push(arr[i])
            } else {
                oddNum.push(arr[i])
            }
        }
        // console.log(evenNum, oddNum)
        this.setState({ evenArray: evenNum, oddArray: oddNum })
        
        // console.log(this.state.evenArray, this.state.oddArray)
    }

    render() {
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Even And Odds</h4>
                <input className='inputLine' onChange={ (event) => this.handleChange(event.target.value) }/>
                <button className='confirmationButton' onClick={() => { this.updateEvenAndOdd(this.state.userInput) }}>Split</button>
                <span className='resultsBox'>Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className='resultsBox'>Odds: { JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd