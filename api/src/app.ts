import { config } from 'dotenv'
import express, { Application } from 'express'
import { Connect } from './db/connection'
import cors from 'cors'
import home from './routes/home.routes'

config()
const connectWithRetry = async () => {
  try {
    await Connect()
    console.log('Connection Established...')
  } catch (error) {
    console.log('Database Connection Error Will retry connection after 5 seconds')
    setTimeout(connectWithRetry, 5000)
  }
}
  
connectWithRetry()

const app: Application = express()
const port = process.env.PORT

app.use(cors())
app.use(home)
let http = require('http').Server(app)

const server = http.listen(port, () => {
  console.log(`Server is listening on port ${port}.`)
})

// ---------error handling-----------
const onError = (error: any) => {
  if (error?.syscall !== 'listen') {
    throw error
  }
  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`
  switch (error?.code) {
    case 'EACCES':
      console.log(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.log(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}
server.on('error', onError)