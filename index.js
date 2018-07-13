var cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  return[...cats,name];
}