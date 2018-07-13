var cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendKitten(name) {
  cats.pop(name);
  return cats;
}