import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

let localMongoUri = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
let mongoUri = `mongodb+srv://admin-deeni:muha234mmad@cluster0.n2lhm.mongodb.net/test`;

export const dbConnection = {
  url: process.env.NODE_ENV === 'development' ? localMongoUri : mongoUri,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
