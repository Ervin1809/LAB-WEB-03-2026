import { Pool } from "pg";

let pool;

if (process.env.NODE_ENV === "production") {
  pool = new Pool();
} else {
  if (!global._pgPool) {
    global._pgPool = new Pool();
  }
  pool = global._pgPool;
}

export default pool;
