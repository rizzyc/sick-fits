require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

// TODO use express middleware to handle cookes (JWT)
// TODO uese epress middleware to produce current isseus;

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now runing on port http://localhost:${deets.port}
      `);
  }
);
