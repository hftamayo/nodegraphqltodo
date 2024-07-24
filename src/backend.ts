import { ApolloServer, gql } from "apollo-server";
import fs from "fs";
import path from "path";
import { dbConnection } from "./api/config/setup";
import { port, mode } from "./api/config/envvars";
import { todoResolver } from "./api/graphql/resolvers/todo.resolver";

const typeDefs = gql`
  ${fs.readFileSync(
    path.join(__dirname, "api/graphql/typeDefs/todo.graphql"),
    "utf8"
  )}
`;

async function startBackEnd() {
  try {
    await dbConnection();
    const server = new ApolloServer({
      typeDefs,
      resolvers: [todoResolver],
      context: ({ req, res }) => ({ req, res }),
    });

    server.listen(port, () => {
      console.log(`Server is running on port ${port} in ${mode} mode`);
      console.log(
        `GraphQL server ready at http://localhost:${port}${server.graphqlPath}`
      );
    });
  } catch (error) {
    console.error("Error starting GraphQLtodo backend: ", error);
    process.exit(1);
  }
}

export { startBackEnd };