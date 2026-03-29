import express from "express";
import cors from "cors";
import salesRoutes from "./routes/salesRoutes";


const app = express();

app.use(cors());
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use("/api/sales", salesRoutes);

export default app;