import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const corsOptions = {
    origin: true,
    credentials: true, // Allow cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);



app.listen(PORT, () => {connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});