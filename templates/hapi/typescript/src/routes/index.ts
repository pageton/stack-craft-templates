import { ServerRoute } from "@hapi/hapi";

const routes: ServerRoute[] = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return { message: "Welcome to the API" };
    },
  },
  {
    method: "GET",
    path: "/health",
    handler: (request, h) => {
      return { status: "OK" };
    },
  },
];

export default routes;
