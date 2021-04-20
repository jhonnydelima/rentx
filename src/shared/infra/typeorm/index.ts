import { Connection, createConnection, getConnectionOptions } from "typeorm";

// createConnection();

/* (host = database_ignite) -> service's name in docker-compose file */
// (host = "localhost") -> works
export default async (host = "database_ignite"): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOptions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentx_test"
          : defaultOptions.database,
    })
  );
};
