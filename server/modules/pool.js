const pg = require('pg');

const Pool = pg.Pool;
const pool = new Pool({
    database: 'signal_flow',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
});

pool.on('connect', () => {
    console.log('Postgresql CONNECTED');
});

pool.on('error', (error) => {
    console.log('ERROR with Postgresql pool', error);
});

module.exports = pool;