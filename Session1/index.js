const http = require("node:http");
const PORT = 8089;

const server = http.createServer((req, res) => {
  console.log("request recieved");

  const url = req.url;
  
  if(url === "/") {
    res.setHeader("Content-Type", "text/plain")
    res.write("Welcome to the home page ");
    res.write(" this wesite is about nice things");
    // this end is vv IMP if you do not do this 
    res.end();
  } else if (url === "/about" ) {
    res.setHeader("Content-Type", "text/plain")
    res.write("Welcome to the about page ");
    // this end writes and then ends the response
    res.end("this page is a developer page");
  } else if (url === "/contact") {
    res.setHeader("Content-Type", "text/plain")
    
    res.write("Welcome to the contact page ");
    res.end("you can contact us via email: abc@gmail.com");
  } else if (url === "/fitness") {
    const fitnessInformation = {
        workouts: ["running", "cycling", "swimming"],
        nutrition: "balanced diet",
        rest: "8 hours of sleep",
        age: 30,
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345"
        },
        shouldSleepEightHours: true
    }

    // metadata/HEADERS - data about the  actual data ("{name: ayz}")
    
    res.setHeader("Content-Type", "application/json");
    const stringifiedFitnessInformation = JSON.stringify(fitnessInformation);
    res.end(stringifiedFitnessInformation); // to postman "{name: ayz}"

  }

  
});


server.listen(PORT, () => {
    console.log(`Thumbs up Server running at http://localhost:${PORT}/`);
});




