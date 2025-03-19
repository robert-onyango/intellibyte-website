import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type Contact,
  type InsertContact,
  newsletterSubscriptions,
  type Newsletter,
  type InsertNewsletter
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form submissions
  createContactSubmission(contact: InsertContact): Promise<Contact>;
  
  // Newsletter subscriptions
  createNewsletterSubscription(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  
  currentId: number;
  contactId: number;
  newsletterId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    this.currentId = 1;
    this.contactId = 1;
    this.newsletterId = 1;
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
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  async createContactSubmission(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactId++;
    const timestamp = new Date();
    
    // Handle optional fields with proper null defaults
    let company: string | null = null;
    if (typeof insertContact.company === 'string') {
      company = insertContact.company;
    }
    
    let service: string | null = null;
    if (typeof insertContact.service === 'string') {
      service = insertContact.service;
    }
    
    const contact: Contact = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      company,
      service,
      message: insertContact.message,
      createdAt: timestamp 
    };
    
    this.contacts.set(id, contact);
    return contact;
  }
  
  async createNewsletterSubscription(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = this.newsletterId++;
    const timestamp = new Date();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: timestamp 
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
