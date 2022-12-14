const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Send message on get request');
    res.send('Hello full-stack development')
})

app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => console.log('Express server listening on port: ' + server.address().port))
