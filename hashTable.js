const hash = (key, size) => {
  let hashedKey = 0;

  for (let i = 0; i < key.length; i++) {
    hashedKey = key.charCodeAt(i);
    console.log(hashedKey)
  }

  return hashedKey % size;
}

class HashTable {
  constructor () {
    this.size = 20;
    this.buckets = Array(this.size);

    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = new Map()
    }
  }

  insert(key, value) {
    let index = hash(key, this.size);
    this.buckets[index].set(key, value);
  }

  remove(key) {
    let index = hash(key, this.size)
    let deleted = this.buckets[index].get(key);
    this.buckets[index].delete(key)
    return deleted;
  }

  search(key) {
    let index = hash(key, this.size);
    return this.buckets[index].get(key)
  }
}

let newTable = new HashTable();
newTable.insert('1', 2)

console.log(newTable.search('1'));