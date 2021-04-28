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
