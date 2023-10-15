import PropTypes from "prop-types";

function PokemonCard(props) {
    console.log(props)
    const {pokemon} = props;
    return (
      <figure>
        <figcaption> {pokemon.name} { pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p> } </figcaption>
      </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.imgSrc,
    }).isRequired
}
export default PokemonCard