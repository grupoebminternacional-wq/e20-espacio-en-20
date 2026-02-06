import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  published: boolean("published").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const portfolioItems = pgTable("portfolio_items", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  client: text("client").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  result: text("result").notNull(),
  imageUrl: text("image_url"),
  services: text("services").array().notNull(),
});

export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  quote: text("quote").notNull(),
  fullName: text("full_name").notNull(),
  company: text("company").notNull(),
  service: text("service").notNull(),
  rating: integer("rating").notNull().default(5),
  imageUrl: text("image_url"),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).omit({ id: true, createdAt: true });
export const insertBlogPostSchema = createInsertSchema(blogPosts).omit({ id: true, createdAt: true });
export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).omit({ id: true });
export const insertTestimonialSchema = createInsertSchema(testimonials).omit({ id: true });

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contactSubmissions.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
