var pg = require('pg');
var config = {
   //user: 'vzcexrgllbfpwg',
   //host:'ec2-52-0-93-3.compute-1.amazonaws.com',
   //password: '1a6b31281e49b445b1c19e2fa23dc2ea345e7da7211d4b16a7a2a5215acf227b',
   //database: 'd1mssicitt3s3vi',
   //port:5432,
   connectionString:'postgres://vzcexrgllbfpwg:1a6b31281e49b445b1c19e2fa23dc2ea345e7da7211d4b16a7a2a5215acf227b@ec2-52-0-93-3.compute-1.amazonaws.com:5432/d1mssicitt3s3v',
   ssl: { rejectUnauthorized: false }
}
const pool = new pg.Pool(config)
var getpgcontran = async (qname,qargs) => {
   const client = await pool.connect() 
   try
   {
      return result = await client.query(qname,qargs)
      }
   catch(e){
      return e  
   }
   finally{
      client.release()
      console.log("Connection closed")
   }
};
exports.connection = config;
exports.conquery = getpgcontran;

