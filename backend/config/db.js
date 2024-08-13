import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://patel:patel19@cluster0.uunypaa.mongodb.net/FoodDash').then(()=>console.log("DB Connected"))
}