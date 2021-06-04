const { gql } = require("apollo-server-express");

module.exports= gql`
     
    type User {
        id : ID
        name: String
    }

    type Query{
        createdUser(id : ID) : User
        viewers:User!
    }
    type Mutation{
        login(email:String, password:String):String
    }
` ;