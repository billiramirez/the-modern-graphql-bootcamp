import {GraphQLServer} from 'graphql-yoga';

const typeDefs = `
    type Query{
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'hello',
        name: () => 'name',
        location: () => 'location',
        bio: () => 'bio'
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start(()=> console.log('server running'));