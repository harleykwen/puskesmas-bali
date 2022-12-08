import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

import pasienRoute from './routes/pasien.route'
import mongoose from 'mongoose'

dotenv.config()

async function mainApp() {
    const app: Application = express()
    const PORT: number = Number(process.env.PORT) || 3001
    const MONGO_URI = process.env.MONGO_URI

    await mongoose.connect('mongodb://localhost:27017', { dbName: 'puskesmas-bali' })
        .then(() => console.log('connect to mongodb'))
        .catch((error) => console.log('error connect to mongodb', error))

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    app.use('/v1/pasien', pasienRoute)
    app.use('/', (req: Request, res: Response) => {
        return res.send('Hello World!')
    })

    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`)
    })
}

mainApp()