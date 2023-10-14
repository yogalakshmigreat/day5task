let jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      let value = jsonObject[key];
      console.log(`${key}: ${value}`);
    }
  }
  