import mongoose from "mongoose"

const connectDB= async () =>{
    mongoose.connect('mongodb+srv://${process.env_DB_USER}:${process.env.DB_PASSWoRD}@cluster0.8os58.mongodb.net/oficina')
    .then(() => console.log('Connectado ao MondoDB'))
    .catch((error) => console.log(error))
}
export default connectDB