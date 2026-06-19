
// require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config()
const app = require("./src/app")
const connectToDb = require("./src/config/database")

connectToDb()



app.listen("https://day-92-93-fullstack.onrender.com", ()=>{
    console.log("server is running on port 3000")
})

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });