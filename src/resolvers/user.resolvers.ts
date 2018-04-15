export default {
  Query: {
    user: async (_, { id }, ctx) => {
      console.log(ctx.Users.userById);
      const user = await ctx.Users.userById(id);
      return user;
    },
    users: async (_, __, ctx) => {
      const users = await ctx.Users.allUsers();
      return users;
    }
  }
};
