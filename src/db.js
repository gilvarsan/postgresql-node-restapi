import pg from "pg";
import {
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
} from "./config.js";

export const pool = new pg.Pool({
  user: DB_USER, // Nombre de usuario de PostgreSQL
  host: DB_HOST, // Dirección del host de la base de datos
  database: DB_DATABASE, // Nombre de la base de datos
  password: DB_PASSWORD, // Contraseña del usuario de PostgreSQL
  port: DB_PORT, // Puerto de la base de datos PostgreSQL
});
