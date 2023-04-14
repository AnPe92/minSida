// pages/api/get-data.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {

        const connection = mysql.createPool(process.env.DATABASE_URL as string);
        //console.log(process.env.DATABASE_URL as string, " 321abs")

        const [rows] = await connection.execute('SELECT * FROM todo');
        await connection.end();

        res.status(200).json(rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching data' });
    }
}
