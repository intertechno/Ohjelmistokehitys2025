console.log("Fetch-demo alkaa.");

fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => {
        for (let index = 0; index < json.length; index++) {
            const element = json[index];
            console.log(`User ${index + 1}: ${element.name}`);
        }
      });

console.log("Fetch-kutsu tehty.");
