const { gql } = require("apollo-server-express");

module.exports= gql`
     
    type User {
        id : ID
        name: String
        
       
    }

    type Query{
    
        user(id: ID!): User      
        viewers:User!
    }
    type Mutation{
        login(email:String, password:String):String
    }
` ;