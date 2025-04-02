import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertBookingSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes, prefix with /api
  
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.status(201).json({
        message: "Contact request submitted successfully",
        id: contactRequest.id
      });
    } catch (error) {
      console.error("Contact form validation error:", error);
      res.status(400).json({ 
        message: "Invalid contact request data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get all contact requests
  app.get("/api/contact", async (req, res) => {
    try {
      const contactRequests = await storage.getContactRequests();
      res.status(200).json(contactRequests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ 
        message: "Error retrieving contact requests",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Handle booking submissions
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json({
        message: "Booking created successfully",
        id: booking.id,
        booking
      });
    } catch (error) {
      console.error("Booking validation error:", error);
      res.status(400).json({ 
        message: "Invalid booking data",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get all bookings
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ 
        message: "Error retrieving bookings",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  // Get bookings by email
  app.get("/api/bookings/email/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const bookings = await storage.getBookingsByEmail(email);
      res.status(200).json(bookings);
    } catch (error) {
      console.error("Error fetching bookings by email:", error);
      res.status(500).json({ 
        message: "Error retrieving bookings",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
