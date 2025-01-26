import express from "express";
import cors from "cors";
import connectDB from "./DB/Database.js";
import 'dotenv/config';
import helmet from "helmet";
import morgan from "morgan";
import transactionRoutes from "./Routers/Transactions.js";
import userRoutes from "./Routers/userRouter.js";
// import path from "path";

// Connect to the database
connectDB();

const app = express();
const port = process.env.PORT || 3000;

// Allowed Origins
 const allowedOrigins = [
   "http://localhost:3000", // Add your frontend URLs here
 
];

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1", transactionRoutes); // Routes for transactions
app.use("/api/auth", userRoutes); // Routes for user authentication

// Health Check Route
// app.get("/health", (req, res) => {
//   res.status(200).send({ status: "UP" });
// });

// Serve static files in production
// const __dirname = path.resolve();
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "client/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

// Global Error Handling Middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     message: err.message || "Internal Server Error",
//   });
// });

// Start the Server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
