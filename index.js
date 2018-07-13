var cats = [];

function destructivelyAppendKitten(name) {
  return[...cats,name];
}