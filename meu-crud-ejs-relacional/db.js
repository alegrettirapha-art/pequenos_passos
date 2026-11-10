import pg from 'pg';

const { Pool } = pg;

// Configuração da conexão com PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'passos',
    password: 'senai',
    port: 5432,
});

export default pool;