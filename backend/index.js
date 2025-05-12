import express from "express";
const app = express();

import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";

import morgan from "morgan";

import connectDB from "./db/connect.js";

import authRouter from "./routes/authRoutes.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

import cookieParser from "cookie-parser";
import {
  resetPassword,
  verifyOTP,
  forgotPassword,
} from "./controllers/passwordController.js";
import {
  findRoommates,
  searchPeople,
  searchTextbooks,
} from "./controllers/searchController.js";
import {
  getTicketsAndCards,
  purchaseBusCards,
  purchaseBusTickets,
} from "./controllers/ticketController.js";
import authenticate from "./middleware/authenticate.js";
import {
  getPurchasedMealPlans,
  purchaseMealPlan,
} from "./controllers/mealController.js";
import {
  getScheduledActivities,
  getUserSelectedActivities,
  selectActivities,
  getAllActivities,
} from "./controllers/activityController.js";
import { generateRandomRoommates } from "./utils/roommates.js";
import { generateRandomBusTickets } from "./utils/ticketdata.js";
import { generateRandomMealPlans } from "./utils/meals.js";
import { saveActivitiesToDatabase } from "./utils/activitydata.js";
import { getPollResults, submitVote } from "./controllers/voteController.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(cors({ origin: "http://localhost:4200", credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(helmet());
app.use(mongoSanitize());

app.get("/api/v1", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/auth", authRouter);

app.get("/api/v1/textbooks", searchTextbooks);
app.get("/api/v1/searchpeople", searchPeople);
app.post("/api/v1/roommate", findRoommates);

app.post("/api/v1/tickets", authenticate, purchaseBusTickets);
app.post("/api/v1/cards", authenticate, purchaseBusCards);
app.get("/api/v1/tickets", authenticate, getTicketsAndCards);

app.get("/api/v1/mealplans", authenticate, getPurchasedMealPlans);
app.post("/api/v1/purchasemeal", authenticate, purchaseMealPlan);

app.get("/api/v1/scheduled", authenticate, getScheduledActivities);
app.post("/api/v1/selectactivities", authenticate, selectActivities);
app.get("/api/v1/useracts", authenticate, getUserSelectedActivities);
app.get("/api/v1/activities",getAllActivities);

app.post("/api/v1/vote", authenticate, submitVote);
app.get("/api/v1/pollresults", getPollResults);

app.post("/api/v1/forgotpassword", forgotPassword);
app.post("/api/v1/resetpassword", resetPassword);
app.post("/api/v1/verifyotp", verifyOTP);

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    //csvMaker();
    //generateRandomRoommates(15);
    //generateRandomBusTickets(15);
    //generateRandomMealPlans(15);
    //saveActivitiesToDatabase();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
