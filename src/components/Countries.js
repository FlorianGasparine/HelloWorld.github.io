import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

// Lorsque on veut inserer des variables dans le jsx il suffit d'ouvrir des accolades.
// Tous les evenements sont directement injectés dans la balise que l'on veut jouer.
// Pour faire une fonction de trie on utilise des tableaux que l'on va couper avec slice ou d'autres fonction liées aux tableaux.

const Countries = () => {
  // On peut modifier rangeValue via setRangeValue
  const [rangeValue, setRangeValue] = useState(36);

  // On se créer une petite BDD avec les continents qu'on va map
  const radiosContinent = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [selectedRadio, setSelectedRadio] = useState("");

  const [data, setData] = useState([]);
  // Le useEffet se joue lorsque le composant est monté (lorsque il est appelé) Avec une fonction call back ([])
  // On fait un useEffet a un composant si on a envie qu'il joue quelque chose des qu'on le crée, il faut cloisonner les choses dans un useEffect, useState pour que le composant ne joue pas ce qu'on lui demande à l'infini
  // Ce sont des hooks
  // Avec Axios pas besoin d'avoir la ligne pour transformer la réponse en fichier json : ce qui suit est une requete axios
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />

        {radiosContinent.map((continent) => (
          <li>
            <input
              type="radio"
              id={continent}
              name="Continent radio"
              checked={continent === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={continent}>{continent}</label>
          </li>
        ))}
      </ul>
      {/* Si Selected est true alors tu affiches le boutton  */}
      {selectedRadio && (
        <button onClick={() => setSelectedRadio("")}>Remove Search</button>
      )}

      <ul>
        {/* On filtre, on trie, on coupe ce qu'on veut garder et apres on affiche la donnée */}
        {/* Dans le filtre, on choisit d'afficher uniquement les pays qui ont les propriétés présente dans le tableau continent de l'API  */}
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .sort((a, b) => b.population - a.population)
          .slice(0, rangeValue)
          .map((country, index) => (
            // Composant enfant qui est card et on va passer des donnes a cet enfant donc on fait une props
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
