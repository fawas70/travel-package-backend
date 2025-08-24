// server.js
const jsonServer = require("json-server");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Middlewares (logging, CORS, static files, etc.)
server.use(middlewares);

// Use default router
server.use(router);

// Render provides PORT, fallback to 5000 locally
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 JSON Server is running on port ${PORT}`);
});
