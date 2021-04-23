import React, { Component } from 'react'
import axios from 'axios'
import List from '../list'
import NavBar from '../NavBar'

 const url="https://pokeapi.co/api/v2/pokemon" 

class Container extends Component {

    state = {
        pokeData: []
    }

    componentDidMount() {
        axios.get(url)
        .then(result => {
            const pokeData = result.data.results;
            
            this.setState({
                pokeData
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        const { pokeData } = this.state;

        return (
            <div>
                <NavBar />
                <List pokedata={pokeData}/>
            </div>
        )

    }
}


export default Container;