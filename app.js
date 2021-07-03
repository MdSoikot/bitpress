
const express = require('express')
const router = require('./routes/routes')
const app = express()

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.use(router)

app.listen(3000, () => {
    console.log(`listening at http://localhost:${3000}`)
})