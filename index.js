//import json-server library in index.js file
const jsonServer = require("json-server")

//create json-server
const mediaplayerServer = jsonServer.create()

//create path to json file
const router = jsonServer.router('db.json')

//middleware to control json to js
const middleware = jsonServer.defaults()

//use middleware and router in server
mediaplayerServer.use(middleware)
mediaplayerServer.use(router)

//setup port for running server (cz json server and react will run at port 3000 by default, so to avoid the clash)
const port = 5000 || process.env.PORT

//to listen server for resolving request from client
mediaplayerServer.listen(port,()=>{
    console.log(`mediaplayerServer started at ${port} and waiting for the request`)
})

//finally run the server