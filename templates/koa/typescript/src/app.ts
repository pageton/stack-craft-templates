import Koa from "koa";
import Router from "@koa/router";
import routes from "./routes";
import logger from "koa-logger";

const app = new Koa();
const router = new Router();
const port = 3000;

// Middleware
app.use(logger());

// Routes
app.use(routes.routes()).use(routes.allowedMethods());

console.log(`Server is running on port ${port}`);

app.listen(port);
