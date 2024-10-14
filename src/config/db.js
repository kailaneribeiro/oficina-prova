import mongoose from "mongoose"

const connectDB= async () =>{
    mongoose.connect('mongodb://localhost:27017/oficina')
    .then(() => console.log('Connectado ao MondoDB'))
    .catch((error) => console.log(error))
}
export default connectDB