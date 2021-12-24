var utils = require('../common/utils')
var readComment = require('./readComment');
module.exports = (app, console) => {
    app.post('/getAllComments',async (req, res) => {
         result  = await readComment.getAllComments(req);
         utils.handleresultdict(res,result)
        }
    )
    app.post('/getComment',async (req, res) => {
        result  = await readComment.getComment(req);
        utils.handleresultdict(res,result)
        }
    )

};
