
# Hashx Follow CUD Microservice

Microservice to implement Follow Table Create Update and Delete operations.

Run using - 
npm install 
npm start 
(OR)
node index.js

# Routes

## /createFollow

Creates a new Follow : 

Request Body - 
 - req.body.Follower : IdentityUUID of Follower
 - req.body.Following : IdentityUUID of Following



 *Optional Arguments 
 
Response Body -
- res.data.Following

Query : Insert into "Follow" ("Follower","Following") 




## /deleteFollow

Deletes Follow row : 
Request Body - 
 - req.body.Follower : IdentityUUID of Follower
 - req.body.Following : IdentityUUID of Following

 Response Body -
- res.data.Follower
- res.data.Following


Query : delete from "Follow" where "Follower"= $1 AND "Following"=$2



# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API






