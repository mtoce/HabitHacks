import { addHabits } from '@/lib/mongo/habits';

import { habits } from '@/constants/';

import clientPromise from "@/lib/mongo";

// export async function POST() {
//     const res = await fetch('https://data.mongodb-api.com/...', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'API-Key': process.env.DATA_API_KEY,
//       },
//       body: JSON.stringify({ time: new Date().toISOString() }),
//     })
   
//     const data = await res.json()
   
//     return Response.json(data)
//   }

const handler = async (req, res) => {
    if (req.method === 'POST') {
        try {
            const { habits, error } = await addHabits()
            if (error) throw new Error(error)

            return res.status(200).json({ habits })
        } catch (error) {
            return res.status(500).json({ error: error.message})
        }
    }

    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} is not allowed.`)
}

export { handler as POST }