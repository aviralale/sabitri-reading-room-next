"use client";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Mail,
  Phone,
  ChevronRight,
  User,
  AtSign,
  FileText,
  SendHorizontal,
  Shield,
  MapPin,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
// Simulate API call
const simulateApiCall = (): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      // 90% chance of success
      if (Math.random() > 0.1) {
        resolve({
          success: true,
          message: "Your message has been sent successfully!",
        });
      } else {
        reject({
          success: false,
          message: "There was an error sending your message. Please try again.",
        });
      }
    }, 2000); // 2 second delay to simulate network
  });
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formState, setFormState] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: "",
  });

  type ErrorKeys = keyof typeof errors;

  const [errors, setErrors] = useState<{
    name: string;
    email: string;
    subject: string;
    message: string;
  }>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validate subject
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: FormEvent) => {
    const { id, value } = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setFormData((prev) => ({ ...prev, [id]: value }));

    // Clear error when user starts typing
    if (errors[id as ErrorKeys]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };
  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Scroll to first error
      const firstErrorField = Object.keys(errors).find(
        (key) => errors[key as keyof typeof errors]
      );
      if (firstErrorField) {
        document.getElementById(firstErrorField)?.focus();
      }
      return;
    }

    // Show loading state
    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: "",
    });

    try {
      // Simulate API call
      const response = await simulateApiCall();

      // Show success state
      setFormState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: response.message,
      });

      // Reset form after successful submission
      resetForm();

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isSuccess: false,
          message: "",
        }));
      }, 5000);
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage,
      });

      // Reset error message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({
          ...prev,
          isError: false,
          message: "",
        }));
      }, 5000);
    }
  };

  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto max-w-5xl px-4 lg:px-6 relative">
        {/* Decorative elements - subtle in both modes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-300 dark:bg-blue-900 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-300 dark:bg-indigo-900 rounded-full opacity-20 blur-3xl" />

        {/* Header with compatible gradient */}
        <div className="relative mb-16 text-center">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            We&apos;d love to hear from you
          </div>
          <h1 className="text-center text-4xl font-bold tracking-tight lg:text-5xl text-slate-800 dark:text-white">
            Contact Us
          </h1>
          <p className="mt-4 text-center text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our team is ready to help you find the perfect solution for you and
            your objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact options cards */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-4 sm:p-5 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-blue-500 dark:bg-blue-600 p-2 rounded-lg text-white mr-3 shadow-md flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base text-slate-800 dark:text-white">
                    Email Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm">
                    Get a response within 24 hours
                  </p>
                  <a
                    href="mailto:info@sabitrireadingroom.com"
                    className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center mt-1 text-sm hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all"
                  >
                    info@sabitrireadingroom.com
                    <ChevronRight className="h-4 w-4 ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-indigo-500 dark:bg-indigo-600 p-2 rounded-lg text-white mr-3 shadow-md flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base text-slate-800 dark:text-white">
                    Call Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm">
                    Talk to a specialist immediately
                  </p>
                  <a
                    href="tel:+977-1-5911356"
                    className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center mt-1 text-sm hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                  >
                    +977-1-5911356
                    <ChevronRight className="h-4 w-4 ml-1 flex-shrink-0" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5 border border-slate-200 dark:border-slate-700 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start">
                <div className="bg-purple-500 dark:bg-purple-600 p-2 rounded-lg text-white mr-3 shadow-md flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base text-slate-800 dark:text-white">
                    Visit Us
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 text-sm">
                    Find us at our location
                  </p>
                  <p className="text-purple-600 dark:text-purple-400 font-medium inline-flex items-center mt-1 text-sm break-words">
                    Kalash Complex, Suncity, Pepesicola
                    <ChevronRight className="h-4 w-4 ml-1 flex-shrink-0" />
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Main contact form */}
          <Card className="lg:col-span-2 relative overflow-hidden p-6 sm:p-8 shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 backdrop-blur-sm">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-50 dark:bg-indigo-900/20 rounded-tl-full"></div>
            <div className="absolute top-1/2 right-0 w-16 h-16 bg-purple-50 dark:bg-purple-900/20 rounded-l-full"></div>

            <div className="relative z-10">
              <h2 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
                Get in Touch
              </h2>

              {/* Success & Error alerts */}
              {formState.isSuccess && (
                <Alert className="mb-6 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                  <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <AlertTitle className="text-green-800 dark:text-green-300">
                    Success!
                  </AlertTitle>
                  <AlertDescription className="text-green-700 dark:text-green-400">
                    {formState.message}
                  </AlertDescription>
                </Alert>
              )}

              {formState.isError && (
                <Alert className="mb-6 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <AlertTitle className="text-red-800 dark:text-red-300">
                    Error
                  </AlertTitle>
                  <AlertDescription className="text-red-700 dark:text-red-400">
                    {formState.message}
                  </AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="font-medium flex items-center text-slate-700 dark:text-slate-200"
                    >
                      <User className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                      Full Name *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      required
                      className={`border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg ${
                        errors.name ? "border-red-500 dark:border-red-500" : ""
                      }`}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState.isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="font-medium flex items-center text-slate-700 dark:text-slate-200"
                    >
                      <AtSign className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                      Email Address *
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      required
                      className={`border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg ${
                        errors.email ? "border-red-500 dark:border-red-500" : ""
                      }`}
                      placeholder="you@domain.com"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState.isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="phone"
                    className="font-medium flex items-center text-slate-700 dark:text-slate-200"
                  >
                    <Phone className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                    Phone Number (Optional)
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    className="border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg mt-2"
                    placeholder="+977-9XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                  />
                </div>

                <div className="mb-6">
                  <Label
                    htmlFor="subject"
                    className="font-medium flex items-center text-slate-700 dark:text-slate-200"
                  >
                    <FileText className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                    Subject *
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    required
                    className={`border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg mt-2 ${
                      errors.subject ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-8">
                  <Label
                    htmlFor="message"
                    className="font-medium flex items-center text-slate-700 dark:text-slate-200"
                  >
                    <MessageSquare className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                    Your Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    required
                    className={`border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:ring-blue-400 rounded-lg mt-2 ${
                      errors.message ? "border-red-500 dark:border-red-500" : ""
                    }`}
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState.isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white py-6 rounded-lg font-medium flex items-center justify-center shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  disabled={formState.isSubmitting}
                >
                  {formState.isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendHorizontal className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <div className="mt-6 flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
                  <Shield className="h-4 w-4 mr-2 text-slate-400 dark:text-slate-500" />
                  Your information is securely encrypted and never shared.
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
