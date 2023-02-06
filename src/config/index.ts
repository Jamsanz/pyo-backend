import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// export const CREDENTIALS = process.env.CREDENTIALS === 'true';
// export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN, SENDGRID_KEY } = process.env;
export const NODE_ENV = 'development';
export const PORT = 5000;
export const DB_HOST = 'localhost';
export const DB_PORT = 27017;
export const DB_DATABASE = 'test';
export const SECRET_KEY = 'secretKey';
export const LOG_FORMAT = 'dev';
export const LOG_DIR = '../logs';
export const ORIGIN = '*';
export const CREDENTIALS = true;