import {
  Patient,
  Gender,
  Entry,
  HospitalEntry,
  HealthCheckEntry,
  OccupationalHealthcareEntry,
} from "./types/types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseString = (text: any): string => {
  if (!text || !isString(text)) {
    throw new Error(`Incorrect or missing: ${text}`);
  }
  return text;
};

const toNumber = (text: any): number => {
  if (!text || isNaN(Number(text))) {
    throw new Error(`Incorrect or missing: ${text}`);
  }
  return Number(text);
};

const isGender = (str: string): str is Gender => {
  return ["male", "female", "other"].includes(str);
};

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }
  return gender;
};

const parseEntries = (entries: any): Entry[] => {
  if (!entries) {
    throw new Error(`Incorrect or missing entries: ${entries}`);
  }
  return entries;
};

const parseDiagnosticCodes = (codes: any): string[] => {
  if (!codes) {
    throw new Error(`Incorrect or missing codes: ${codes}`);
  }
  return codes;
};

const isType = (str: string) => {
  return ["Hospital", "OccupationalHealthcare", "HealthCheck"].includes(str);
};

const parseType = (type: any) => {
  if (!type || !isType(type)) {
    throw new Error(`Incorrect or missing type: ${type}`);
  }
  return type;
};

const toHospitalEntry = (object: any): HospitalEntry => {
  return {
    id: parseString(object.id),
    description: parseString(object.description),
    date: parseString(object.date),
    specialist: parseString(object.specialist),
    diagnosisCodes: parseDiagnosticCodes(object.diagnosisCodes),
    type: "Hospital",
    discharge: {
      date: parseString(object.discharge.date),
      criteria: parseString(object.discharge.criteria),
    },
  };
};

const toOccupationalHealthcareEntry = (
  object: any
): OccupationalHealthcareEntry => {
  return {
    id: parseString(object.id),
    description: parseString(object.description),
    date: parseString(object.date),
    specialist: parseString(object.specialist),
    diagnosisCodes: parseDiagnosticCodes(object.diagnosisCodes),
    type: "OccupationalHealthcare",
    employerName: parseString(object.employerName),
    sickLeave: {
      startDate: parseString(object.sickLeave.startDate),
      endDate: parseString(object.sickLeave.endDate),
    },
  };
};

const toHealthCheck = (object: any): HealthCheckEntry => {
  return {
    id: parseString(object.id),
    description: parseString(object.description),
    date: parseString(object.date),
    specialist: parseString(object.specialist),
    diagnosisCodes: parseDiagnosticCodes(object.diagnosisCodes),
    type: "HealthCheck",
    healthCheckRating: toNumber(object.healthCheckRating),
  };
};

export const toEntry = (object: any): Entry => {
  console.log("type: ", object.type);

  const type = parseType(object.type);
  console.log("type: ", type);
  switch (type) {
    case "Hospital":
      return toHospitalEntry(object);
    case "OccupationalHealthcare":
      return toOccupationalHealthcareEntry(object);
    case "HealthCheck":
      return toHealthCheck(object);
    default:
      throw new Error(`Incorrect or missing type: ${object.type}`);
  }
};

const toPatient = (object: any): Patient => {
  return {
    id: parseString(object.id),
    name: parseString(object.name),
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
    entries: parseEntries(object.entries),
  };
};

export default toPatient;
