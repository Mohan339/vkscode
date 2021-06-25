const {and, or, rule, shield} = require("graphql-shield");


function checkpermission(user, permission){
    if(user && user["https://space.com/graphql"]){
        return user["https://space.com/graphql"].permissions.includes(
            permission
        );
    }
    return false;
}

const isAuthenticated = rule()((parent, args, {user}) =>{
    return user  !== null;
});
const canReadanyuser = rule()((parent, args, {user}) =>{
    return checkpermission(user, "read:any_user")
});
const canReadgownuser = rule()((parent, args, {user}) =>{
    return checkpermission(user, "read:own_user")
});
const isReadingownuser = rule()((parent, args,{id}, {user}) =>{
    
        return user && user.sub === id;
});

module.exports = 
    shield({
    Query:{
        user: or(and(canReadgownuser, isReadingownuser), canReadanyuser ),
        viewers: isAuthenticated
    }
})
