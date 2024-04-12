const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./app/routes/user')
const contentRoutes = require('./app/routes/content')
const topicRoutes = require('./app/routes/topic')
const categoryRoutes = require('./app/routes/category')

const InitDB = require('./app/config/db')

const app = express()

const port = 2501

app.use(
    bodyParser.json({
        limit: '20mb'
    })
    )
app.use(
    bodyParser.urlencoded({
        limit: '20mb',
        extended: true
    })
)


app.use(userRoutes)
app.use(contentRoutes)
app.use(contentRoutes)
app.use(topicRoutes)
app.use(categoryRoutes)

InitDB()



app.listen(port, () => {
    console.log('La aplicacion funciona')
})