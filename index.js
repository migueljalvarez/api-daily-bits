const dotenv = require("dotenv");
dotenv.config();
const jsonServer = require("json-server");

const auth = require("json-server-auth");
const app = jsonServer.create();
const router = jsonServer.router("db.json");
// const routes = require('./routes.json')
// const rules = auth.rewriter(routes);
const cors = require('cors');
// /!\ Bind the router db to the app
app.db = router.db;
// You must apply the auth middleware before the router

app.use('*', cors());


// app.use(rules)
app.use(auth);
app.use(router);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Json Server is running on ${port}`);
});
