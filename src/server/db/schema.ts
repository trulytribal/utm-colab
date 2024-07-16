import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const demoTable = sqliteTable('demotable', {
  foo: text('bar').notNull().default('Hey!'),
});
