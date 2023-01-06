import mongoose from 'mongoose';
import programs from './data/programs';
import users from './data/users';
import Program from './models/programModel';
import User from './models/userModel'


const importData = async () => {
  try {
    await Program.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUserId = createdUser[0]._id;

    const createdPrograms = programs.map(program => {
      return {...program, user : adminUserId}
    });

    await Program.insertMany(createdPrograms);

    console.log('Data imported!');
  } catch (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
}

const destroyData = async () => {
  try {

    await Program.destroyData();
    await User.destroyData();

    console.log('Data destroyed1');
  } catch (error) {
    console.error(`Error : ${error}`);
  }
}

if(process.argv[2] == '-d') {
  destroyData();
} else {
  importData();
}