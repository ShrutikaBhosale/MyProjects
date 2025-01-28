const fakeConsole = (...args) => {};

export class HashMap {
  constructor(map) {
    this.map = map;
    this.size = map.length;
  }

  generateHashCode(key) {
    const hashValue = [...key].reduce((hash, char) => {
      hash = (hash << 5) + hash + char.charCodeAt();
      return hash;
    }, 0);

    return hashValue % this.size;
  }

  set(key, value) {
    const index = this.generateHashCode(key);
    if (!this.map[index]) {
      this.map[index] = [];
    }

    const bucket = this.map[index];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[key] = value;
        return this.map;
      }
    }

    bucket[key] = value;
    return this.map;
  }

  get(key) {
    const index = this.generateHashCode(key);
    const bucket = this.map[index];

    if (!bucket) {
      return "key not exists";
    }

    return bucket[key];
  }

  deleteKey(key) {
    const index = this.generateHashCode(key);
    const bucket = this.map[index];

    if (!bucket) {
      return "key not exists"; //use fakeconsole and print it here
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        if (bucket.length === 0) {
          delete this.map[index];
        }
        return "key deleted";
      }
    }
  }

  has(key) {
    const index = this.generateHashCode(key);
    const bucket = this.map[index];

    if (!bucket) {
      return false;
    }

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }
  }
}
