import diagnosesData from "../../diagnoses.json";
import { Diagnose } from "../types/types";

const diagnoses: Array<Diagnose> = diagnosesData as Array<Diagnose>;

const getDiagnoses = (): Diagnose[] => diagnoses;

const findById = (code: string): Diagnose | undefined => {
  const entry = diagnoses.find((d) => d.code === code);
  return entry;
};

export default {
  getDiagnoses,
  findById,
};
