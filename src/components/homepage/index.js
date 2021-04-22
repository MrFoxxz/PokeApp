import React from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'

const Homepage = props => {
    return (
        <div className="App">
            <header className="App-header">
                <img src='https://images.wikidexcdn.net/mwuploads/esssbwiki/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png' alt="pokeimage" />
                <h1>Poke App</h1>
                <Link to="/pokelist">Ver Pokemones</Link>
            </header>
        </div>
    )
}


export default Homepage

