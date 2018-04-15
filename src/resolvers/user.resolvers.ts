import data from '../data/data';

export default {
  Query: {
    user: async (_, { id }) => {
      const user = await data.users.find(u => u.id === id);
      return user;
    },
    users: () => data.users
  }
};
