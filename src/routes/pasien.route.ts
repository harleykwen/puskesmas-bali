import { Router } from 'express'
import { createPasien, isPasienRegistered } from '../controllers/pasien.controller'
import multer from 'multer'

const pasienRouter = Router()

pasienRouter.post('/', multer().none(), createPasien)
pasienRouter.post('/status-pendaftaran', multer().none(), isPasienRegistered)

export default pasienRouter