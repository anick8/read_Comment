exports.succReply = function(data, msg, res){
    res.status(200).send({"status":"SUCCESS", "data":data, "err": null, "msg":msg});
};

exports.failReply = function(data, msg, res){
    res.status(400).send({"status":"FAILURE", "err":data, "data": null, "msg":msg});
};

exports.forbidReply = function(data, msg, res){
    res.status(403).send({"status":"FAILURE", "err":data, "data": null, "msg":msg});
};

exports.authFailure = function(msg, res){
    res.status(401).send({"status":"FAILURE", "data":null, "err":{}, "msg":msg});
};

exports.generalCallback = function(res){
    return function(err, data, msg){
        if (!err)
            res.send(data).status(200);
        else
            res.send(err);
    };
};
	    
exports.checkallkeys = function(reqobj, reqkeys){
    for (var i in reqkeys)
	if (!(reqkeys[i] in reqobj))
	    return [false, reqkeys[i]];
    return [true, null];
}

exports.verifyapiargs = function (reqobj, res, next, reqkeys) {
    let isallkeys = this.checkallkeys(reqobj, reqkeys);
    if(!isallkeys[0])
        this.failReply('MISSING_API_ARGUMENTS', "key not found : " + isallkeys[1], res);
    else
        next()
};

let parseHexString = function(str) {
    let result = [];
    while (str.length >= 2) {
        result.push(parseInt(str.substring(0, 2), 16));
        str = str.substring(2, str.length);
    }
    return result;
};
exports.parseHexString = parseHexString;

exports.handleresult = async (res,result) => {
    if (result[0])
        res.status(400).send({"err":result[0],"data":null,"msg":result[2]})
    else
        res.status(200).send({"err":null,"data":result[1],"msg":result[2]})
 
}
