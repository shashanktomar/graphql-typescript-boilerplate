import { Data, User } from '../connectors/data';

const userById = (data: Data) => async (id: number): Promise<User> => {
  const user = await data.users.find(u => u.id === id);
  return user;
};

const allUsers = (data: Data) => async (): Promise<ReadonlyArray<User>> => {
  const users = await data.users;
  return users;
};

export default (data: Data) => ({
  allUsers: allUsers(data),
  userById: userById(data)
});
