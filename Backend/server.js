const express = require("express");
const { ApolloServer, makeExecutableSchema } = require("apollo-server-express");
const {applyMiddleware} = require("graphql-middleware")
const expressJwt = require("express-jwt");

// const permissions = require("./permissions")
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
    schema:applyMiddleware(
        makeExecutableSchema({typeDefs,resolvers})
        // permissions
    ),
    
    context: ({req}) => {
            const user = req.user || null;
                return {user};
            },
        });
server.applyMiddleware({app});


app.listen({port}, () => {
    console.log(`http://localhost:${port}`)
})