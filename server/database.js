import mongoose from "mongoose";

export const databaseConnection = async () => {
    await mongoose.connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log("Database connection established");
    })

    const db = mongoose.connection

    db.on("error", async (event) => {
        console.log(event);
    })
    db.once("open", async () => {
        console.log("Database connection established Successfully")
    })
}