export interface Data {
  readonly users: ReadonlyArray<User>;
}

export interface User {
  readonly id: number;
  readonly userName: string;
  readonly firstName: string;
  readonly lastName: string;
}

const data: Data = {
  users: [
    { id: 1, userName: 'john', firstName: 'John', lastName: 'Smith' },
    { id: 2, userName: 'kim', firstName: 'Kimberly', lastName: 'Jones' }
  ]
};

export default data;
