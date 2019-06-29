import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement(
    'div',
    {
      id: 'something important'
    },
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'Dog',
        breed: 'Havanese'
      }),
      React.createElement(Pet, {
        name: 'Pepper',
        animal: 'Bird',
        breed: 'Cockatiel'
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'Cat',
        breed: 'Stray'
      }),
      React.createElement(Pet, {
        name: 'Gabriel',
        animal: 'Cavalo',
        breed: 'animal'
      })
    ]
  );
};

//React.createElement(element, attributes, children -> can be a array);

//Overwrites everything inside div id="root" element
render(React.createElement(App), document.getElementById('root'));