const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const expressJwt = require("express-jwt");


const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

const port = 7777;
const app = express();


app.use(
    expressJwt({
        secret:"super-secret",
        algorithms:["HS256"],
        credentialsRequired:false
})
)
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => {
            const user = req.user || null;
                return {user};
            },
        });
server.applyMiddleware({app});


app.listen({port}, () => {
    console.log("Server is running")
})