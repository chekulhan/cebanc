import pkg from 'pg';
const { Pool } = pkg;

// Create a new connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'erp',
  password: 'postgres',
  port: 5432,
  max: 10,              // Optional: max connections in pool (default 10)
  idleTimeoutMillis: 30000, // Optional: close idle clients after 30 seconds
});

// No need to manually connect here, pool manages connections automatically

export default pool;



// https://node-postgres.com