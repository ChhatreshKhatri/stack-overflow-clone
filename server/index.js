import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'

const app = express();
// app.use((req, res, next) => {
//     console.log(`Incoming Request: ${req.method} ${req.url}`);
//     next();
// });

dotenv.config();
// @ts-ignore
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})
app.use('/user', userRoutes)
app.use('/questions', questionRoutes)
app.use('/answer', answerRoutes)

const PORT = process.env.PORT || 5000
const DATABASE_URL = process.env.DATABASE_URL
mongoose.set('strictQuery',false)

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))