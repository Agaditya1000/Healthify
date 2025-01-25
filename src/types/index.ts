export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor' | 'admin';
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  image: string;
  availability: {
    days: string[];
    hours: string[];
  };
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}