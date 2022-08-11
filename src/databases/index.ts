import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

const localMongoUri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
const mongoUri = `mongodb+srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/pyo-institute`;

export const dbConnection = {
  url: process.env.NODE_ENV !== 'development' ? localMongoUri : mongoUri,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
