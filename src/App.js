import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement(
  //   'div',
  //   {
  //     id: 'something important'
  //   },
  //   [
  //     React.createElement('h1', {}, 'Adopt Me!'),
  //     React.createElement(Pet, {
  //       name: 'Luna',
  //       animal: 'Dog',
  //       breed: 'Havanese'
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Pepper',
  //       animal: 'Bird',
  //       breed: 'Cockatiel'
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Doink',
  //       animal: 'Cat',
  //       breed: 'Stray'
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Gabriel',
  //       animal: 'Cavalo',
  //       breed: 'animal'
  //     })
  //   ]
  // );
  return (
    /* React.StrictMode gives you additional warnings
      about things you shouldn't be doing in your code
    */
    <React.StrictMode>
      <div>
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </React.StrictMode>
  );
};

//React.createElement(element, attributes, children -> can be a array);

//Overwrites everything inside div id="root" element

// render(React.createElement(App), document.getElementById('root'));
render(<App />, document.getElementById('root'));
