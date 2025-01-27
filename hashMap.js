// if there are two keys with same name it should override
// multiply by 32 substract previous hash value
//  ---------DJB2 -----------
function generateHashCode(key, size) {
  let hashValue = 0;

  for (let i = 0; i < key.length; i++) {
    hashValue = (hashValue << 5) - hashValue + key.charCodeAt(i);
  }

  return hashValue % size;
}

function set(map, key, value, size) {
  const index = generateHashCode(key, size);

  if (!map[index]) {
    map[index] = [];
  }

  for (let i = 0; i < map[index].length; i++) {
    if (map[index][i][0] === key) {
      map[index][i][1] = value;
      return map;
    }
  }

  map[index].push([key, value]);
  return map;
}

function get(map, key, size) {
  const index = generateHashCode(key, size);
  const bucket = map[index];

  if (!bucket) {
    return "key not exists";
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return bucket[i][1];
    }
  }
}

function deleteKey(map, key, size) {
  const index = generateHashCode(key, size);
  const bucket = map[index];

  if (!bucket) {
    return "key not exists";
  } //bucket shouldn't present their after deletion

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      bucket.splice(i, 1);
      // if bucket is empty after removal then delete that bucket itself
      return "key deleted";
    }
  }
}

function has(map, key, size) {
  const index = generateHashCode(key, size);
  const bucket = map[index];

  if (!bucket) {
    return false;
  }

  for (let i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === key) {
      return true;
    }
  }
}

function createHashMap(size) {
  const map = new Array(size);
  set(map, "name", "shrutika", size);
  // return get(map, "age", size);
  // return deleteKey(map, "age", size);
  // return deleteKey(map, "name", size);
  // return has(map, "age", size);
  return has(map, "name", size);
}

const hashMap = createHashMap(10);
console.log(hashMap);
