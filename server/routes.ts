import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertContactMessageSchema } from "@shared/schema";
import { storage } from "./storage";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // Send email notification
      const emailSent = await sendContactEmail(message);
      if (!emailSent) {
        console.warn("Email notification failed for message:", message.id);
        // Don't fail the request - message is still stored
      }
      
      res.status(201).json({ 
        success: true, 
        message: "Wiadomość została wysłana pomyślnie",
        id: message.id 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        error: "Błąd podczas wysyłania wiadomości" 
      });
    }
  });

  // Contact messages endpoint removed for security - contains PII and requires authentication

  const httpServer = createServer(app);

  return httpServer;
}
