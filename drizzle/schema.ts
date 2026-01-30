/**
 * Drizzle ORM Schema for Tavvy OnTheGo
 * Minimal schema to allow build to succeed
 */

import { mysqlTable, varchar, timestamp, text, int, boolean } from 'drizzle-orm/mysql-core';

// Users table
export const users = mysqlTable('users', {
  id: varchar('id', { length: 255 }).primaryKey(),
  openId: varchar('open_id', { length: 255 }).unique().notNull(),
  email: varchar('email', { length: 255 }),
  name: varchar('name', { length: 255 }),
  avatar: text('avatar'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// Rep Activity Log table
export const repActivityLog = mysqlTable('rep_activity_log', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  activity: text('activity').notNull(),
  timestamp: timestamp('timestamp').defaultNow(),
});

export type RepActivityLog = typeof repActivityLog.$inferSelect;
export type InsertRepActivityLog = typeof repActivityLog.$inferInsert;

// Batch Import Jobs table
export const batchImportJobs = mysqlTable('batch_import_jobs', {
  id: varchar('id', { length: 255 }).primaryKey(),
  userId: varchar('user_id', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).notNull(),
  totalRecords: int('total_records'),
  processedRecords: int('processed_records'),
  failedRecords: int('failed_records'),
  errorMessage: text('error_message'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

export type BatchImportJob = typeof batchImportJobs.$inferSelect;
export type InsertBatchImportJob = typeof batchImportJobs.$inferInsert;
