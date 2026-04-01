const mongoose = require("mongoose");

const connectDB = async () => {

    const mongoUri = process.env.MONGO_URI ?? "mongodb+srv://renancavalcanti_db_user:CBFUY2q2VWNd0MqR@cluster0.whvxvig.mongodb.net/?appName=Cluster0/tt4-2930";

    if(!mongoUri){
        throw new Error("MONGO_URI is not defined in enviroment variables!");
    }

    await mongoose.connect(mongoUri);
    console.log("MongoDB connected successfully.");
};

module.exports = { connectDB }