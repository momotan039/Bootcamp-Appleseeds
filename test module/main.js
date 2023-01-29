import * as UserFile from './user.js'

const user=new UserFile.default('khaled',32)

console.log(user);

UserFile.getUserAge(user)