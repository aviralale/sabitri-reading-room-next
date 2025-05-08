import { Contact, Testimonial } from "@/types";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchTestimonials = async (): Promise<Testimonial[] | null> => {
  try {
    const response = await axios.get<Testimonial[]>(`${API_URL}/testimonials/`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return null;
  }
};

export const handleSubscribe = async (email: string): Promise<boolean> => {
  try {
    await axios.post(`${API_URL}/subscribers/`, {
      email_address: email,
    });
    return true;
  } catch (error) {
    console.error("Error subscribing:", error);
    return false;
  }
};

export const handleContact = async (data: Contact) => {
  try {
    await axios.post(`${API_URL}/contacts/`, data);
    return true;
  } catch (error) {
    console.error("Error contacting:", error);
    return false;
  }
};
