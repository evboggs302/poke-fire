import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

export default class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    };
  }

  componentDidMount() {
    axios.get("https://api.pokemontcg.io/v1/cards").then(pokemon => {
      this.setState({
        pokemon: pokemon.data.cards
      });
    });
  }

  render() {
    const { pokemon } = this.state;
    console.log(pokemon);
    const myPokeCollection = pokemon.map(pokemon => {
      return (
        <Card
          addToCollection={this.props.addToCollection}
          removeFromCollection={this.props.removeFromCollection}
          key={pokemon.id}
          {...pokemon}
        />
      );
    });
    return <div className="my-collection">{myPokeCollection}</div>;
  }
}
