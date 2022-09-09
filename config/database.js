module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5434),
      database: env("DATABASE_NAME", "strapiapp"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "NebulaAdmin123!"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
