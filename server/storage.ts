import {
  type InsertContact, type Contact,
  type InsertBlogPost, type BlogPost,
  type InsertPortfolioItem, type PortfolioItem,
  type InsertTestimonial, type Testimonial,
  contactSubmissions,
  blogPosts,
  portfolioItems,
  testimonials,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createContact(data: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  createBlogPost(data: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;

  createPortfolioItem(data: InsertPortfolioItem): Promise<PortfolioItem>;
  getPortfolioItems(): Promise<PortfolioItem[]>;

  createTestimonial(data: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class DatabaseStorage implements IStorage {
  async createContact(data: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contactSubmissions).values(data).returning();
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async createBlogPost(data: InsertBlogPost): Promise<BlogPost> {
    const [post] = await db.insert(blogPosts).values(data).returning();
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }

  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }

  async createPortfolioItem(data: InsertPortfolioItem): Promise<PortfolioItem> {
    const [item] = await db.insert(portfolioItems).values(data).returning();
    return item;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return db.select().from(portfolioItems);
  }

  async createTestimonial(data: InsertTestimonial): Promise<Testimonial> {
    const [testimonial] = await db.insert(testimonials).values(data).returning();
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }
}

export const storage = new DatabaseStorage();
