// Stub for @better-auth/kysely-adapter.
// We use the Drizzle/Postgres adapter — Kysely paths never execute at runtime.
// Bypasses the broken DEFAULT_MIGRATION_LOCK_TABLE / DEFAULT_MIGRATION_TABLE imports
// in the SQLite dialect files of @better-auth/kysely-adapter@1.6.12.
// Remove once #9554 ships.

// https://github.com/better-auth/better-auth/issues/9810

export function getKyselyDatabaseType() {
  return null;
}

export async function createKyselyAdapter() {
  return { kysely: null, databaseType: null, transaction: undefined };
}

export default {};