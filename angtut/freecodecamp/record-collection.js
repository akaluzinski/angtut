function updateRecords(records, id, prop, value) {

  if (value === '') {
    delete records[id][prop]
  } else {
    if (prop === 'tracks') {
      if (!records[id].hasOwnProperty(prop)) {
        records[id][prop] = [value];
      }
      if (value !== '') {
        records[id][prop].push(value);
      }
    } else {
      records[id][prop] = value;
    }
  }

  return records;
}


function sum(arr, n) {
  return n <= 0 ? 0 : sum(arr, n - 1) + arr[n - 1];
}
