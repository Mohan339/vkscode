const jwt = require("jsonwebtoken");
const {users} = require("./data")

module.exports=  {
    Query :{
    createdUser(parent , args)
        {
            return users.find(user => user.id === args.id)
        },
       viewers(parent, args ,{user}) {
            return users.find(({id}) =>  id === user.sub)
        }

    },
        Mutation:{
            login(parent, {email, password}){
                    const { id, permission,role} = users.find(
                        user => user.email === email || user.password === password );
                     return jwt.sign(
                    {"https://spaceapi.com/graphql":{role,id, permission}},//1st arg
                    "super-secret",//2nd arg to verify the token
                    {algorithm:"HS256",subject: id, expiresIn:"1d"}//additional info subject_id is same as users_id

                        
                     )   
            }}
        
    }

