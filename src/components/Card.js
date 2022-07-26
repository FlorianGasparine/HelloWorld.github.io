import React from "react";

const Card = ({ country }) => {
  // ici on aurait pu passer en parametre de Card props et ensuite log props.country, la on déstructure entre{} et on accede directement à la donnée
  //  C'est comme ca qu'un composant parent transmet ses données à un composant enfant ici : parent Countries enfant : Card
  console.log(country);
  return (
    <div>
      <li className="card">
        <img
          src={country.flags.svg}
          alt={"Countrie Flag " + country.name.common}
        />
        <div className="infos">
          <h2>{country.name.common}</h2>
          <h4>{country.capital}</h4>
          <p>Pop. {country.population.toLocaleString()}</p>
        </div>
      </li>
    </div>
  );
};

export default Card;
