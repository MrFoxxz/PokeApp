import React from 'react'

const List = ({ pokedata}) => {
    return (
        <div>
            <h1>lista de pokemones</h1>
            <ul>
                {pokedata.map( pokemon => {
                    return(
                        <li>{pokemon.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List
