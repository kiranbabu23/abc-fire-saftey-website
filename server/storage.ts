import { 
  users, type User, type InsertUser,
  contactRequests, type ContactRequest, type InsertContactRequest,
  bookings, type Booking, type InsertBooking 
} from "@shared/schema";
import { z } from "zod";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact requests
  createContactRequest(contactRequest: InsertContactRequest): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;

  // Bookings
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookings(): Promise<Booking[]>;
  getBookingsByEmail(email: string): Promise<Booking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactRequestsData: Map<number, ContactRequest>;
  private bookingsData: Map<number, Booking>;
  currentId: number;
  currentContactRequestId: number;
  currentBookingId: number;

  constructor() {
    this.users = new Map();
    this.contactRequestsData = new Map();
    this.bookingsData = new Map();
    this.currentId = 1;
    this.currentContactRequestId = 1;
    this.currentBookingId = 1;
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

  // Contact requests methods
  async createContactRequest(insertContactRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.currentContactRequestId++;
    const now = new Date();
    const contactRequest: ContactRequest = { 
      ...insertContactRequest, 
      id,
      createdAt: now,
      phone: insertContactRequest.phone || null,
      serviceInterest: insertContactRequest.serviceInterest || null
    };
    this.contactRequestsData.set(id, contactRequest);
    return contactRequest;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequestsData.values());
  }

  // Bookings methods
  async createBooking(insertBooking: InsertBooking): Promise<Booking> {
    const id = this.currentBookingId++;
    const now = new Date();
    const booking: Booking = { 
      ...insertBooking, 
      id,
      createdAt: now,
      notes: insertBooking.notes || null
    };
    this.bookingsData.set(id, booking);
    return booking;
  }

  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookingsData.values());
  }

  async getBookingsByEmail(email: string): Promise<Booking[]> {
    return Array.from(this.bookingsData.values())
      .filter(booking => booking.email === email);
  }
}

import { DbStorage } from './db-storage';

// Use DbStorage instead of MemStorage for production
export const storage = process.env.NODE_ENV === 'test' 
  ? new MemStorage() 
  : new DbStorage();
