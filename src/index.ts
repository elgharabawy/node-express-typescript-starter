import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

// import routes

import cmsContentItemRouter from "./routes/cmsContentItem.route";

const PORT = process.env.PORT || 8080;

const app: Express = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Welcome");
});

// implement routes

app.use("/cms-content-item", cmsContentItemRouter);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export { app as default, server };
