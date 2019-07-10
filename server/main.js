import express from 'express'
import bp from 'body-parser'
import './db/dbconfig'
let port = 3000

let server = express()

server.use(bp.json())

import GalaxiesController from 