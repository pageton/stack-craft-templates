import Fastify from "fastify";
import routes from "./routes";

const server = Fastify({ logger: true });

server.register(routes);

const start = async () => {
  try {
    await server.listen({ port: 3000, host: "0.0.0.0" });
    console.log(`Server running on port 3000`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
