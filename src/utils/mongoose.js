import {connect, connection} from 'mongoose';

export async function dbConnect() {
    const db = await connect(process.env.MONGODB_URL)
    console.log(db.connections[0].readyState);
}

connection.on("connected", ( ) => {
    console.log("Mongodb is connected");
})

connection.on("error", (err) => {
    console.log(err);
})