import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    phone: "9660366537",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    phone: "9660366537",
    password: "123456",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "9660366537",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
