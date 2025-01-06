// utils/database.ts
import { db } from "@vercel/postgres";

export type Revenue = {
  month: string;
  revenue: number;
};

export async function fetchRevenue(): Promise<Revenue[]> {
  try {
    // Connect to the database
    const client = await db.connect();

    // Query the database
    const data = await client.sql`
      SELECT month, revenue
      FROM revenue_table
      ORDER BY month DESC
      LIMIT 12;  // Adjust according to your needs
    `;

    // Map the result to match the Revenue[] type
    const revenues: Revenue[] = data.rows.map((row) => ({
      month: row.month,
      revenue: parseFloat(row.revenue), // Ensure it's a number
    }));

    return revenues; // Return the mapped revenue data
  } catch (error) {
    console.error("Database Error:", error); // Log full error
    throw new Error("Failed to fetch revenue data: " + error.message); // Pass the error message
  }
}
