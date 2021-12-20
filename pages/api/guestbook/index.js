import { getSession } from 'next-auth/react';
import prisma from 'lib/prisma';

export default async function handler(req, res) {
  // Retrieve all guestbook entries (no auth needed)
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

  // Obtain user from current session (auth needed)
  const session = await getSession({ req });
  const { email, name } = session.user;

  if (!session) {
    return res.status(403).send('Unauthorized');
  }

  // Post guestbook entry (auth needed)
  if (req.method === 'POST') {
    const newEntry = await prisma.guestbook.create({
      data: {
        email,
        // Limit to 500 characters, if null just use empty string
        body: (req.body.body || '').slice(0, 500),
        created_by: name,
      },
    });

    return res.status(200).json({
      id: newEntry.id.toString(),
      body: newEntry.body,
      created_by: newEntry.created_by,
      updated_at: newEntry.updated_at,
    });
  }

  // Any other methods
  return res.send('Method not allowed.');
}
