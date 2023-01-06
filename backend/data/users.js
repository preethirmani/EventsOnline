import bcryptjs from 'bcryptjs';
import mongoose, { Mongoose } from 'mongoose';


const usersSchema = [
  {
    name : 'Admin User',
    email : 'adminUser@test.com',
    password: bcryptjs.hashSync('12134', 10),
    isAdmin: true
  },
  {
    name : 'John Doe',
    email : 'john.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
    isAdmin: false
  },
  {
    name : 'Jane Doe',
    email : 'jane.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
    isAdmin: false
  },
  {
    name : 'Jake Doe',
    email : 'jake.doe@test.com',
    password: bcryptjs.hashSync('1234',10),
    isAdmin: false
  }
];
const User = mongoose.model('users',usersSchema)
export default User;