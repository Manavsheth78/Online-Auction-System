const mongoose = require("mongoose")
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://admin:IdX4wMIoWTUKHv03@cluster0.gzqcnq3.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('DB!!!')
    } catch (err){
        console.error(err)
        process.exit(1)
    }
}

connectDB()