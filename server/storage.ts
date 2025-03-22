import { 
  users, type User, type InsertUser,
  contactMessages, type ContactMessage, type InsertContactMessage,
  newsletterSubscriptions, type NewsletterSubscription, type InsertNewsletterSubscription
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message methods
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Newsletter subscription methods
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Contact message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    // Handle optional fields
    const messageToInsert = {
      ...message,
      telefono: message.telefono || null,
      empresa: message.empresa || null,
      servicio: message.servicio || null
    };
    
    const [contactMessage] = await db
      .insert(contactMessages)
      .values(messageToInsert)
      .returning();
    
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(contactMessages.created_at);
  }
  
  // Newsletter subscription methods
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check for duplicate emails
    const existingSubscriptions = await db
      .select()
      .from(newsletterSubscriptions)
      .where(eq(newsletterSubscriptions.email, subscription.email));
    
    if (existingSubscriptions.length > 0) {
      throw new Error("Email is already subscribed. Error: unique constraint");
    }
    
    const [newSubscription] = await db
      .insert(newsletterSubscriptions)
      .values(subscription)
      .returning();
    
    return newSubscription;
  }
  
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return await db.select().from(newsletterSubscriptions).orderBy(newsletterSubscriptions.created_at);
  }
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private userId: number;
  private contactMessageId: number;
  private subscriptionId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.userId = 1;
    this.contactMessageId = 1;
    this.subscriptionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const now = new Date();
    const contactMessage: ContactMessage = { 
      ...message,
      telefono: message.telefono || null,
      empresa: message.empresa || null,
      servicio: message.servicio || null,
      id, 
      created_at: now
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  // Newsletter subscription methods
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check for duplicate emails
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === subscription.email,
    );
    
    if (existingSubscription) {
      throw new Error("Email is already subscribed. Error: unique constraint");
    }
    
    const id = this.subscriptionId++;
    const now = new Date();
    const newsletterSubscription: NewsletterSubscription = { 
      ...subscription, 
      id, 
      created_at: now 
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }
  
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
}

// Cambiamos a usar la implementación de base de datos en vez de memoria
export const storage = new DatabaseStorage();
