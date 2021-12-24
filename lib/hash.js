let crypto = require('crypto');
exports.hashing = (createdby,createdat) => {
    data = "hashxuppu"+createdat.toString()+createdby.toString()
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash;
}
exports.orghash = (orgname) => {
    data = "IntelliOrg"+orgname.toString()
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash;
}
exports.billhash = (billad,createdat) => {
    data = "IntelliBill "+billad.toString()+createdat.toString()
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    return hash;
}


