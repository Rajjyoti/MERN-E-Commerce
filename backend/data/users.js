import bcrypt from 'bcryptjs'

const users = [
{
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'Raj Doley',
    email: 'raj@example.com',
    password: bcrypt.hashSync('123456', 10),
},
{
    name: 'Raj D',
    email: 'rd@example.com',
    password: bcrypt.hashSync('123456', 10),
},
]

export default users