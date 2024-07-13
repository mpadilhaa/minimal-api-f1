import { FastifyRequest, FastifyReply } from "fastify";
import { teams, drivers } from "./data";

interface Params {
  id: string;
}

export const getTeams = async (req: FastifyRequest, res: FastifyReply) => {
  res.type("application/json").code(200);

  return { teams };
};

export const driverById = async (
  req: FastifyRequest<{ Params: Params }>,
  res: FastifyReply
) => {
  const id = parseInt(req.params.id);

  const driver = drivers.find((d) => d.id === id);

  if (!driver) {
    res.type("application/json").code(404);
    return { message: "Driver Not found" };
  } else {
    res.type("application/json").code(200);
    return { driver };
  }
};

export const getDrivers = async (req: FastifyRequest, res: FastifyReply) => {
  res.type("application/json").code(200);
  return { drivers };
};
