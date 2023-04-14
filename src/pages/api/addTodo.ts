// pages/api/add-todo.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const { title, description, status, priority } = req.body;

        const connection = mysql.createPool(process.env.DATABASE_URL as string);

        const query = `
      INSERT INTO todo (title, description, status, priority)
      VALUES (?, ?, ?, ?)
    `;

        await connection.execute(query, [title, description, status, priority]);
        await connection.end();

        res.status(201).json({ message: 'Todo created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the todo' });
    }
}
