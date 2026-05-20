// for login functionality
export const users = {
  validUser: {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },

  invalidEmailUser: {
    email: "wrong@email",
    password: process.env.PASSWORD,
  },

  invalidPasswordUser: {
    email: process.env.EMAIL,
    password: "wrongpass",
  },
};
