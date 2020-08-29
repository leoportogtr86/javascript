const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const consign = require('consign')

consign()

    .include('routes')
    .into(app)

app.listen(port, () => {

    console.log(`Online na porta ${port}`)
})
