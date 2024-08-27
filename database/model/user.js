const {Schema,model} = require('mongoose')



const userSchema = new Schema({
    name:'String',
    age:'Number'
})

const UserModel = model('User', userSchema)
module.exports = UserModel