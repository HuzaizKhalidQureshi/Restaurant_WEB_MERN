import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middleware/error.js";
import reservationRoute from "./routes/reservationRoute.js";

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["POST"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.use("/api/v1/reservation", reservationRoute);

app.use(errorMiddleware);

export default app;
