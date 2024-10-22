import express from 'express'
import connectDB from './config/db.js'
import workshopRouter from './routers/workshopRouter.js'
import vehicleRouter from './routers/vehicleRouter.js'
import maintenanceRouter from './routers/maintenanceRouter.js'

connectDB()

const app = express()
app.use(express.json())

app.use('/oficina',workshopRouter)
app.use('/veiculos',vehicleRouter)
app.use('/manutencao',maintenanceRouter)

app.listen(process.env.PORT,() => console.log('servidor rodando na port 300'))