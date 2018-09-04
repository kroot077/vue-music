let mongoose = require('mongoose')
const connectionString = 'mongodb://blankUser1:blankusername1@ds239412.mlab.com:39412/vue-music'
let connection = mongoose.connection

mongoose.connect(connectionString, {
    useNewUrlParser: true
})

connection.on('error', err => {
    console.log("ERROR: ", err)
})

connection.once('open', () => {
    console.log("Connected to Database")
})