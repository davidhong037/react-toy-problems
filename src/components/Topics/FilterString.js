import React, { Component } from 'react';

class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: ['Alice in Borderland', 'Squid Game', 'The Wire', 'Breaking Bad', 'The Peaky Blinders'],            
            userInput: '',
            filteredArray: []
        }
    }

    handleChange = (e) => {
        this.setState({ ...this.state, userInput: e.target.value })
    }

    filterShows = (e) => {
        const shows = this.state.unFilteredArray
        const filteredArr = []
       
        for (let i = 0; i < shows.length; i++){
            if (shows[i].includes(this.state.userInput) === true) {
                filteredArr.push(shows[i])
            }
        }
        this.setState({ ...this.state, filteredArray: filteredArr })
    }


    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>Shows: { this.state.unFilteredArray }</span>
                <input className='inputLine' onChange={ this.handleChange }></input>
                <button className='confirmationButton' onClick={ this.filterShows }>Filter</button>
                <span className='resultsBox filterStringRB'>Filtered: { this.state.filteredArray }</span>
            </div>
        )
        
    }

}

export default FilterString