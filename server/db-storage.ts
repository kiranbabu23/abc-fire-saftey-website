import { eq } from 'drizzle-orm';
import { db } from './db';
import { 
  users, type User, type InsertUser,
  contactRequests, type ContactRequest, type InsertContactRequest,
  bookings, type Booking, type InsertBooking 
} from "@shared/schema";
import { IStorage } from './storage';

export class DbStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Contact requests methods
  async createContactRequest(insertContactRequest: InsertContactRequest): Promise<ContactRequest> {
    const result = await db.insert(contactRequests).values(insertContactRequest).returning();
    return result[0];
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return db.select().from(contactRequests);
  }

  // Bookings methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const result = await db.insert(bookings).values(insertBooking).returning();
    return result[0];
  }

  async getBookings(): Promise<Booking[]> {
    return db.select().from(bookings);
  }

  async getBookingsByEmail(email: string): Promise<Booking[]> {
    return db.select().from(bookings).where(eq(bookings.email, email));
  }
}