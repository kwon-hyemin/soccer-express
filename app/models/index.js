import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.user =  UserModel(mongoose)


export default db
