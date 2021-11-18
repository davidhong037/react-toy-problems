import React, { Component } from 'react';

class Palindrome extends Component {

    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, userInput: e.target.value })
    }

    checkPalindrome = (e) => {
        let forward = this.state.userInput
        let backward = this.state.userInput

        backward = backward.split('').reverse().join('')

        if (forward === backward) {
            this.setState({ ...this.state, palindrome: 'true' })
        } else {
            this.setState({ ...this.state, palindrome: 'false' })
        }
    }

    render() {
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={ this.handleChange }></input>
                <button className='confirmationButton' onClick={ this.checkPalindrome }>Check</button>
                <span className='resultsBox'>Palindrome: { this.state.palindrome }</span>
            </div>
        )
    }

}

export default Palindrome