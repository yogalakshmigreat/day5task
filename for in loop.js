let jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
  
  for (const key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
      const value = jsonObject[key];
      console.log(`${key}: ${value}`);
    }
  }
  