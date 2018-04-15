import { GraphQLServer } from 'graphql-yoga';
import data from './connectors/data';
import Users from './models/Users';
import { default as resolvers } from './resolvers';
import { default as typeDefs } from './typeDefs';

const options = { port: 4004 };

const server = new GraphQLServer({
  context: {
    Users: Users(data)
  },
  resolvers,
  typeDefs
});

server
  .start(options, () =>
    console.log(`Server is running ⚡ on localhost:${options.port}`)
  )
  .catch(err => console.error('connection Error', err));
