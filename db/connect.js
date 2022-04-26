import mongoose from 'mongoose'

const connectDB = (url) => {
  return mongoose.connect(url)
}
export default connectDB

// const connectionString =
//   'mongodb+srv://paul:<password>@nodeexpressproject.jof0n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
