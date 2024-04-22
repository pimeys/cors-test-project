import { graph, config, connector } from "@grafbase/sdk";

const g = graph.Standalone();

const pg = connector.Postgres("pg", {
  url: g.env("CONNECTION_STRING"),
});

g.datasource(pg);

export default config({
  graph: g,
  cors: {
    maxAge: 30,
    allowedOrigins: [
      new URL("https://altair-gql.sirmuel.design/"),
      new URL("https://app.grafbase.com"),
    ],
  },
});
