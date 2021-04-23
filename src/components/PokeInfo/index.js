import React, { Component } from 'react'

class PokeInfo extends Component {
    render() {
            const { match } = this.props;
        return (
            <div>
                <h1>pokeinfo</h1>
                <p>{match.params.name}</p>
                <p>ID:{match.params.pokeIndex}</p>
            </div>
        )
    }
}


export default PokeInfo
