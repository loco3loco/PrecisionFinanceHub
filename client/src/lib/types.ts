export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactMessage {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono?: string;
  empresa?: string;
  servicio?: string;
  mensaje: string;
  created_at: string;
}

export interface NewsletterSubscription {
  id: number;
  email: string;
  created_at: string;
}
