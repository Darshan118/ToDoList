const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
/**
 * This allows your server to handle requests from different origins (domains), which is necessary for
 * APIs consumed by web applications running on different domains.
 */
app.use(cors());
/**
 * Enables JSON body parsing for incoming requests.
 * It processes incoming requests with a Content-Type of application/json, making req.body accessible in
 * routes.Without this, req.body would be undefined for JSON requests.
 */
app.use(express.json());

const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.mongo_uri;
