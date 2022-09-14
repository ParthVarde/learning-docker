import mongoose from 'mongoose'

// if (process.env.NODE_ENV !== 'production') {
//   mongoose.set('debug', true)
// }  

mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
  process.exit(1)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

const Connect = async () => {
  const databaseURL = process.env.DB_URL ? process.env.DB_URL : 'mongodb://localhost:27017/root'
  mongoose.connect(databaseURL, {
    dbName: process.env.DB_NAME,
    autoCreate: true,
  })
}
export { Connect }