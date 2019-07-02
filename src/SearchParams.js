import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
  //A linha abaixo é um Hook. Todos os Hooks começam com use (Ex: useState)
  //You can put a hook definition inside a if statement or a for loop, etc.
  const [location, setLocation] = useState('Seattle, WA');
  const [breeds, setBreeds] = useState([]);
  const [pets, setPets] = useState([]);
  const [animal, AnimalDropdown] = useDropdown('Animal', 'dog', ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown('Breed', '', breeds);

  /* O segundo parametro da função useEffect tem suas dependencias, ou seja
    essa função só será executada quando houver alguma mudança em algum dos
    elementos passados no array [animal, setBreed, setBreeds];
    Para a função abaixo rodar apenas uma vez, passamos como segundo parâmetro
    um array vazio
    E caso queira que essa função rode toda vez que algo atualizar na página,
    apenas retire o segundo parâmetro. Porém, isso geraria um loop infinito, pois
    dentro da mesma função nós chamamos setBreeds() e setBreed(), que por si só
    já causam um re-render.
  */

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed('');
    pet
      .breeds(animal)
      .then(({ breeds }) => {
        const breedStrings = breeds.map(({ name }) => {
          return name;
        });
        setBreeds(breedStrings);
      })
      .catch(error => {
        throw new Error(error);
      });
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={e => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropdown />
        <BreedDropdown />
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
