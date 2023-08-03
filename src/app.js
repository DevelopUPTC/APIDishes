const express = require('express')

const cors = require('cors')

const app = express()

//ConnectDB
require('../drivers/connect-db')

//settings
app.set('PORT',process.env.PORT || 3000 )

//uses
app.use(express.json())
app.use(cors())

//middleware
app.use('/',require('../routes/index'))

app.listen(app.get('PORT'),()=>console.log(`Server Listen at Port ${app.get('PORT')}`))

