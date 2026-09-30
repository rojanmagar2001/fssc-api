import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "",
});

const db = new PrismaClient({
  adapter,
});

export function checkConnection() {
  db.$queryRaw`SELECT 1;`
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error("Database connection failed:", err);
      process.exit(1);
    });
}

export default db;
