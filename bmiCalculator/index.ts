import express from "express";
import calculateBmi from "./src/bmiCalculator";
import calculateExercises from "./src/exerciseCalculator";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Full Stack!");
});

app.post("/exercises", (req, res) => {
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    res.json({ error: "parameters missing" });
  }

  try {
    const result = calculateExercises(daily_exercises, target);
    res.json(result);
  } catch (_) {
    res.json({ error: "malformatted parameters" });
  }
});

app.get("/bmi", (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);

  if (!weight || !height) {
    res.json({ error: "malformatted parameters" });
  }

  try {
    const bmi = calculateBmi(height, weight);
    res.json({ weight, height, bmi });
  } catch (_) {
    res.json({ error: "malformatted parameters" });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
