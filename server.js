import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import "dotenv/config";
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Mongo DB connected Successfully"))
  .catch((err) => console.log("error while connecting DB", err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: process.env.PORT },
});
console.log(`🚀 Server ready at ${url}`);
