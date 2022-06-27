import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

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
