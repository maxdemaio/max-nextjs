import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

export default async function handler(req, res) {
  // Retrieve all guestbook entries
  if (req.method === 'GET') {
    const entries = await prisma.guestbook.findMany({
      orderBy: {
        updated_at: 'desc',
      },
    });

    return res.json(
      entries.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at,
      }))
    );
  }
}
