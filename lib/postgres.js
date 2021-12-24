var config = {
    user: 'vzcexrgllbfpwg',
    host:'ec2-52-0-93-3.compute-1.amazonaws.com',
    password: '1a6b31281e49b445b1c19e2fa23dc2ea345e7da7211d4b16a7a2a5215acf227b',
    database: 'd1mssicitt3s3vi',
    port:5432,
    ssl:true
}
const pg = require('pg');
const R = require('ramda');


async function fetchNow() {

    const client = new pg.Pool(config);

    try {
        await client.connect();

        let result = await client.query('SELECT now()');
        return R.prop('now', R.head(result.rows));
    } finally {
        client.end()
    }
}

fetchNow().then(now => console.log(now));
