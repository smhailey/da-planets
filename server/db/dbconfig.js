import mongoose from 'mongoose'

const connectionString = 'mongodb+srv://student:student@cluster0-4eckx.mongodb.net/da-planets?retryWrites=true&w=majority'

let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

//NOTE log any errors
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//NOTE confirm connection
connection.once('open', () => {
  console.log('Connected to the DB!')
})