import { Router } from 'express'

import { homeFunction } from '../controllers/home.controller'

const home = Router()

home.get('/', homeFunction)

export default home