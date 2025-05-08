export interface Stat {
  value: string;
  label: string;
}

export interface Stats {
  items: Stat[];
}

export interface Testimonial {
  id: number;
  name: string;
  designation: string;
  message: string;
  image: string;
  created_at?: string;
}

export interface Contact {
  name: string;
  email_address: string;
  phone_number: string;
  subject: string;
  message: string;
  status?: string;
  created_at: string;
}
