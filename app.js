import config from './utils/config.js'
import express from 'express'
import mongoose from 'mongoose'
import logger from './utils/logger.js'
import blogsRouter from './controllers/blogs.js'

mongoose.set('strictQuery', false)
logger.info('connecting to mongodb')
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('successfully connected to mongodb'))
  .catch(error => logger.error('error connecting to mongodb:', error.message))

const app = express()
app.use(express.json())

app.use('/api/blogs', blogsRouter)

export default app