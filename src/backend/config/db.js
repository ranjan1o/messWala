const mongoose = require('mongoose');



// const connect = () => {
//     return mongoose.connect("mongodb+srv://user03:ypPpUnlI7Ag2OT6G@messdatabase.p1j1g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
//         console.log('connection successfull')
//         }).catch((err) => {
//         console.log('database connection failed')
//     });
   
// }
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/messWala")
}

module.exports = connect;