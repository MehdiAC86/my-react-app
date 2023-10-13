function PokemonCard(props) {
    console.log(props)
    const {pokemon} = props;
    return (
      <figure>
        <figcaption> {pokemon.name} { pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p> } </figcaption>
      </figure>
    );
}

export default PokemonCard