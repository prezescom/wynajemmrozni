import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  // Temporary route for testing static HTML landing page
  app.get('/test-static', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'index.html'));
  });

  // Serve CSS file for static testing
  app.get('/styles.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(path.join(process.cwd(), 'styles.css'));
  });

  const httpServer = createServer(app);

  return httpServer;
}
