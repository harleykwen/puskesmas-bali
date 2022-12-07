import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Application = express()
const PORT: string = process.env.PORT || ''

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', (req: Request, res: Response) => {
    return res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})