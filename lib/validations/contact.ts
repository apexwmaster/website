import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters')
    .trim(),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address')
    .trim(),
  phone: z
    .string()
    .max(20, 'Phone must be less than 20 characters')
    .refine((val) => {
      // Allow empty values since phone is optional
      if (!val || val.trim() === '') return true;

      // Check format (allows digits, spaces, dashes, parentheses, plus, periods)
      if (!/^[\d\s\-\(\)\+\.]+$/.test(val.trim())) return false;

      // Extract digits only
      const digits = val.replace(/\D/g, '');

      // If phone number is provided, it must have exactly 10 digits
      return digits.length === 10;
    }, 'Phone number must contain exactly 10 digits')
    .optional()
    .or(z.literal('')),
  organization: z
    .string()
    .max(200, 'Organization must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  projectType: z
    .string()
    .max(200, 'Project type must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters')
    .trim(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
