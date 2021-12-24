var pgsql = require('../lib/pgsql')
//var hash =require('../lib/hash')

exports.getAllComments = async (req) => {
        var ItemUUID = req.body.ItemUUID;
        var Offset = req.body.Offset;
        var qarg=[ItemUUID,Offset]
        var map = {}        
        qname='select * from "Comment" where "ItemUUID"= $1 ORDER BY "Upvotes" DESC LIMIT 10 OFFSET $2' 
        try{
            result =await pgsql.conquery(qname,qarg)
            if (result.rowCount > 0){
                for(i=0 ;i< result.rowCount; i++){
                    map[ItemUUID] = result.rows[i]
                    if(result.rows[i].Replies.length>0){    
                        for(j=0;j<result.rows[i].Replies.length;j++){
                            var Replies = getCommentReply(result.rows[i].Replies[j])
                            map[result.rows[i].CommentUUID] = Replies
                    }
                } 
                return {'err':null,'data':map,"msg":"Successfully got Comments and Replies"}
                }
            }
            return {'err':null,'data':null,'msg':"Error creating Follow"}
        }
        catch(err){
            return [err,null,"Error Inserting Like to the database : "+err.detail]
        }

};

var getCommentReply = async (CommentUUID) => {
    var qarg=[CommentUUID]
    qname='select * from "Comment" where "CommentUUID" = $1' 
    try{
        result =await pgsql.conquery(qname,qarg) 
        if (result.rowCount == 1){
            return {'err':null,'data':result.rows,'msg':"Successfully deleted Follow"}
        }   
        else if(result.rowCount == 0){
            data={'err':`${CommentUUID} does not exixt`}
            return {'err':null,'data':data,'msg':"Error deleting Comment"}
        }
    }
    catch(err){
        console.log(err)
        return [err,null,"Error deleting Follower/Follwing the database"]
    }

};
exports.getComment = async(req) => {
    var {CommentUUID} = req.body;
    return getCommentReply(CommentUUID) 
}
