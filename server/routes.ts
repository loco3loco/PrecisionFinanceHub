import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (_req: Request, res: Response) => {
    return res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({
        message: "Mensaje enviado correctamente",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Datos inválidos",
          errors: fromZodError(error).message
        });
      }
      
      return res.status(500).json({
        message: "Error al procesar la solicitud"
      });
    }
  });

  // API route for newsletter subscriptions
  app.post("/api/subscribe", async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      return res.status(201).json({
        message: "Suscripción realizada correctamente",
        data: subscription
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Datos inválidos",
          errors: fromZodError(error).message
        });
      }
      
      // Check for duplicate email error
      if (error instanceof Error && error.message.includes("unique")) {
        return res.status(409).json({
          message: "El email ya está suscrito al newsletter"
        });
      }
      
      return res.status(500).json({
        message: "Error al procesar la solicitud"
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
