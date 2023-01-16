import { Patient } from '../types';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../state';
import { Entry,HospitalEntry,OccupationalHealthcareEntry,HealthCheckEntry } from '../types';
import AddEntryForm from '../components/AddEntry';


const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

const Hospital = ({ entry }: { entry: HospitalEntry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <p>{entry.description}</p>
      <ul>
        {entry.diagnosisCodes?.map((code: string) => (
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

const OccupationalHealthcare= ({ entry }: { entry: OccupationalHealthcareEntry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <p>{entry.description}</p>
      <ul>
        {entry.diagnosisCodes?.map((code: string) => ( 
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

const HealthCheck= ({ entry }: { entry: HealthCheckEntry }) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <p>{entry.description}</p>
      <ul>
        {entry.diagnosisCodes?.map((code: string) => (
          <li key={code}>{code}</li>
        ))}
      </ul>
    </div>
  );
};

const EntryDetails = ({ entry }: { entry: Entry }) => {
  switch (entry.type) {
    case 'Hospital':
      return <Hospital entry={entry} />;
    case 'OccupationalHealthcare':
      return <OccupationalHealthcare entry={entry} />;
    case 'HealthCheck':
      return <HealthCheck entry={entry} />;
    default:
      return assertNever(entry);
  }
};

const PatientInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [{ patients }] = useStateValue();
  const [{ diagnoses }] = useStateValue();
  const patient = Object.values(patients).find(
    (patient: Patient) => patient.id === id
  );

  if (patient) {
      return (
      <div>
        <AddEntryForm />
        <h2>
          {patient.name}
        </h2>
        <p>ssh: {patient.ssn}</p>
        <p>occupation: {patient.occupation}</p>
        <h3>entries</h3>
        <div>
          {patient.entries.map((entry: Entry) => (
            <div key={entry.id}>
             {Object.keys(diagnoses).length === 0 ? null : (
              <EntryDetails entry={entry} />
            )}
            </div>  
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default PatientInfo;