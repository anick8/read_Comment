
# Hashx Comment read Microservice
Microservice to implement Comment Read operations.

Run using -

npm install

npm start (OR) node index.js

# Change Guide
Make changes

git add .

git commit -m "Message"

git push hashx 

# Routes

## /getAllComments

Gets all the Comments given the ItemUUID: 
Request Body - 
 - req.body.ItemUUID - ItemUUID  of the Post,Asset,Buncle etc

 
 Response Body -
 res.body.data  = Mapping of the Comments and Replies

Query -
select * from "Comment" where "ItemUUID"= $1 ORDER BY "Upvotes" DESC LIMIT 10 OFFSET $2

## /getComment

Gets the comment given the CommentUUID.
Request Body -
    
 req.body.CommentUUID -  Gets the comment given the CommentUUID . 

 Response Body - 
 - res.body.data  = [Comment data] array

Query -
select * from "Comment" where "CommentUUID" = $1 
# Response Format

[err,data,msg]

 - err : Error message from SQL try block
 - data : Data returned by SQL query
 - msg : Custom message defined in API
