import React from 'react';
//Both definitions works the same way
export default function Pet(props) {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed)
  ]);
}

//Destructure
// export default function Pet({ name, animal, breed}) {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h2", {}, breed)
//   ])
// }
