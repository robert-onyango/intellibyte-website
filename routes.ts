import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const result = await storage.createContactSubmission(validatedData);
      
      res.status(200).json({
        message: "Contact form submitted successfully",
        data: result
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid form data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const result = await storage.createNewsletterSubscription(validatedData);
      
      res.status(200).json({
        message: "Newsletter subscription successful",
        data: result
      });
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid email", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
