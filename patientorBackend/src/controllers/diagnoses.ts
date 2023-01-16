import express from "express";

import diagnosesService from "../services/diagnoses";

const app = express.Router();

app.get("/", (_req, res) => {
  res.send(diagnosesService.getDiagnoses());
});

export default app;
