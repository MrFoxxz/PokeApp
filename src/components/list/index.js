import React from 'react'
import PokeCard from '../PokeCard'
import { Grid } from '@material-ui/core'

const List = ({ pokedata}) => {
    return (
        <div>
            <h1>lista de pokemones</h1>
            <Grid container spacing={24} justify="center">
                {pokedata.map( pokemon => {

                    let urlimg="https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/"
                    let pokeindex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]

                    return(
                        <PokeCard 
                        id={pokemon.id}
                        image={`${urlimg}${pokeindex}.png?raw=true`}
                        name={pokemon.name}
                        url={pokemon.url}
                        to={`/poke-info/${pokeindex}`}
                        />
                    )
                })}
            </Grid>
            
        </div>
    )
}

export default List
