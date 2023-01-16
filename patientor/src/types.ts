// export interface Diagnosis {
//   code: string;
//   name: string;
//   latin?: string;
// }

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

// export interface Patient {
//   id: string;
//   name: string;
//   occupation: string;
//   gender: Gender;
//   ssn?: string;
//   dateOfBirth?: string;
// }
export interface Diagnosis {
  code: string;
  name: string;
  latin: string;
}

// enum Gender {
//   Male = "male",
//   Female = "female",
//   Other = "other",
// }

interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnosis["code"]>;
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3,
}

export interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}
export interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: {
    startDate: string;
    endDate: string;
  };
}

export interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;

export type FormEntry = Omit<Entry, "id">;

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
  entries: Entry[];
}

export interface Discharge {
  date: string;
  criteria: string;
}

export type PublicPatient = Omit<Patient, "ssn" | "entries">;
export type NoSsnPatients = Omit<Patient, "ssn">;