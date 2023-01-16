import patientData from "../../patients";
import { Patient, NoSsnPatients } from "../types/types";
import { Entry } from "../types/types";
import { v1 as uuid } from "uuid";
import toPatient from "../utils";
// import { Patient } from "../../../patientor/src/types";

const patients: Array<Patient> = patientData as Array<Patient>;

const getPatients = (): NoSsnPatients[] => {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
};

const addPatient = (patient: Omit<Patient, "id" | "entries">): Patient => {
  const id: string = uuid();
  const entries: [] = [];
  const newPatient = {
    id,
    entries,
    ...patient,
  };
  const obj = toPatient(newPatient);
  patients.push(obj);
  return newPatient;
};

const getOne = (id: string): NoSsnPatients | undefined => {
  return patients.find((patient) => patient.id === id);
};

const addEntry = (entry: any, patient: NoSsnPatients): Entry => {
  if (patient) {
    patient.entries.push(entry);
  }
  return entry;
};

export default {
  getPatients,
  addPatient,
  getOne,
  addEntry,
};
