
//require('dotenv).config({path : './env})

import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from 'express'

const app = express()

dotenv.config({
    path: './env'
})
//its important to { import and configured dotenv as early as possible in your application }
//dotenv.config({path : './env'})
////require('dotenv).config({path : './env}) === this is incosistency hence use above import syntax not require
//
connectDB()
.then(() => {

app.on("error", (error) => {
    console.log("Error:", error)
    throw error// it’s not recommended because it can crash your app if not handled properly. 
//when throw enter then program stop executing 
// // process.exit(1); // Uncomment this if you want to restart on errors
})   
 //error-handling event listener in Node.js.
app.listen(process.env.PORT || 8000, () =>
{
    console.log(`Server is running at port : ${process.env.PORT}`);
    
} )
    
})

.catch((err) => {
    console.log("Error:", err)
})

//db always in another continent(it required async await )
//alwyas use try catch block or promises
/*
function connectDB()
{
 
}
connectDB()
*/

/*
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js"

import express from "express"
const app = express()
//another good approch

( async () => {
try
{
 await mongoose.connect(`${process.env.MONGODB_URI}/
    ${DB_NAME}`)
    app.on("error", (error) => {
        console.log("Error :", error);
        throw error
    })
    
    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port 
            ${process.env.PORT}`)
    })
}

catch(error)
{
    console.error("ERROR:", error)
    throw err
}

})()

*/




















































