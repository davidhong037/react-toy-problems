import React, { Component } from 'react';

class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                {
                    name: 'David',
                    age: 36,
                    location: 'New York City'                                    
                },
                {
                    name: 'Natalie',
                    eyeColor: 'Brown',
                    gender: 'Female'
                },
                {
                    name: 'Hanny',
                    location: 'Korea'                    
                },
                {
                    name: 'Jennifer',
                    age: 37
                }
            ],

            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, userInput: e.target.value })
    }

    filterArray = (e) => {
        const people = this.state.unFilteredArray
        const filteredArr = []

        for (let i = 0; i < people.length; i++){
            if (people[i].hasOwnProperty(this.state.userInput) === true) {
                filteredArr.push(people[i])
            }
        }
        this.setState({ ...this.state, filteredArray: filteredArr })
    }
    

    render() {
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>Original: { JSON.stringify(this.state.unFilteredArray) }</span>
                <input className='inputLine' onChange={ this.handleChange }></input>
                <button className='confirmationButton' onClick={ this.filterArray }>Filter</button>
                <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray) }</span>
            </div>
        )
    }
}

export default FilterObject