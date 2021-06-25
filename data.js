const users= [
    {
        
        id:"123",
        name:"mohan",
        email:"mohankumar@mohan.com",
        password:"imgood",
        roles:["fullstackeng"],
        permissions:["read:any_user"]

    },
    {
        
        id:"124",
        name:"somu",
        email:"somu@mohan.com",
        password:"imsomu",
        roles:["fullstackeng"],
        permissions:["read:any_user"]

    },
    {
        
        id:"125",
        name:"vk",
        email:"vk@mohan.com",
        password:"imbad",
        roles:["fullstackeng"],
        permissions:["read:own_user"]

    }
];
module.exports = {users};