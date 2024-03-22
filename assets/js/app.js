// anvend fetch til at hente data fra lokal .json fil
fetch("./assets/js/watchesJson.json")
.then(res => res.json())
.then(watches => console.log(watches))
.catch(err => console.log("FEJL", err))