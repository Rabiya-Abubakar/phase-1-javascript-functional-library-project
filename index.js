function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
      callback(value);
    }
    return collection;
  }
  function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let value of values) {
      newArray.push(callback(value));
    }
    return newArray;
  }
  function myReduce(collection, callback, initialValue) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let accumulator = initialValue !== undefined ? initialValue : values[0];
    const startIdx = initialValue !== undefined ? 0 : 1;
    for (let i = startIdx; i < values.length; i++) {
      accumulator = callback(accumulator, values[i]);
    }
    return accumulator;
  }
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let value of values) {
      if (predicate(value)) return value;
    }
    return undefined;
  }
  function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let newArray = [];
    for (let value of values) {
      if (predicate(value)) newArray.push(value);
    }
    return newArray;
  }
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }
                  