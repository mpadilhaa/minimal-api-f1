import fastify from "fastify";
import cors from "@fastify/cors";
import { driverById, getDrivers, getTeams } from "./controller";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

server.get("/teams", getTeams);

server.get("/drivers/:id", driverById);

server.get("/drivers", getDrivers);

server.listen({ port: 3333 }, () => {
  console.log("server init");
});
