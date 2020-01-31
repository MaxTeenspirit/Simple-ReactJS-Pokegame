import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h2 className="Pokedex-winner Pokedex-text">Winning hand</h2>
        } else {
            title = <h2 className="Pokedex-looser Pokedex-text">Loosing hand</h2>
        }
        return (
            <div className="Pokedex">
                {title}
                <p className="Pokedex-text">Total Experience: {this.props.exp}</p>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) => (
                        <Pokecard 
                            key={p.id + this.props.pokemon.indexOf(p)} 
                            id={p.id} 
                            name={p.name} 
                            type={p.type} 
                            exp={p.base_experience} 
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex;