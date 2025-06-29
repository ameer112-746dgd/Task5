import { z } from 'zod';

export const flightDetailsSchema = z.object({
  from: z.string().min(3, 'Origin is required (min 3 chars)'),
  to: z.string().min(3, 'Destination is required (min 3 chars)'),
  departDate: z.string().min(1, 'Depart date is required'),
  returnDate: z.string().optional(),
});

export const ticketTypeSchema = z.object({
  ticketType: z.enum(['Business', 'Economy']),
});

export const donationSchema = z.object({
  donation: z.enum(['Shelter Foundation', 'Global Outreach', 'Community Support', 'Accessibility Fund']),
});

export const formSchema = flightDetailsSchema.merge(ticketTypeSchema).merge(donationSchema);