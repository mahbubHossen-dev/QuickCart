import mongoose from "mongoose";

const cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn: null, promise: null}
}

async function connectDB(){
    if(cached.conn){
        return cached.conn
    }

    if(!promise){
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/QuickCart`, opts)
    }

    cached.conn = await cached.promise

    return cached.conn
}

export default connectDB


















// import mongoose from "mongoose";

// const cached = global.mongoose

// if (!cached) {
//     catched = global.mongose = { conn: null, promise: null }
// }

// async function connectDB() {
//     if (cached.conn) {
//         return cached.conn
//     }

//     if (!cached.promise) {
//         const opts = {
//             bufferCommands: false
//         }

//         cached.promise = mongoose.connect(`${process.env.MONGODB_URI}/QuickCart`, opts).then(mongoose => {
//             return mongoose
//         })
//     }

//     cached.conn = await cached.promise

//     return cached.conn
// }

// export default connectDB;