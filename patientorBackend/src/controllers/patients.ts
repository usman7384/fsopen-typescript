import express from "express";

import patientServices from "../services/patients";
import toPatient from "../utils";
// import toEntry from "../utils";

const app = express.Router();

app.get("/", (_req, res) => {
  res.send(patientServices.getPatients());
});

app.get("/:patientId", (req, res) => {
  res.send(patientServices.getOne(req.params.patientId));
});

app.post("/", (req, res) => {
  const patient = req.body;
  console.log(patient);
  const newObject = patientServices.addPatient(patient);
  res.json(newObject);
});

app.post("/:patientId/entries", (req, res) => {
  const patientId = req.params.patientId;
  const patient = patientServices.getOne(patientId);
  const newPatient = toPatient(patient);
  const entry = req.body;
  const newObject = patientServices.addEntry(entry, newPatient);
  res.json(newObject);
});

export default app;
