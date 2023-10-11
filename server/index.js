import express from "express";
import "./db/server.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import productsRouter from "./routes/productsRouter.js";
import cors from "cors";

const app = express();
const port = 8000;
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/products", productsRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`The app listening on port ${port}`);
});
