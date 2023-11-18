// import { addHabits } from '@/lib/mongo/habits';

import { habits } from '@/constants/';

import clientPromise from "@/lib/mongo";

const addHabit = async (habit) => {
    const mongoClient = await clientPromise

    const res = await mongoClient.db().collection('habits').insertOne(habit)

    return res.insertedId
}

// const handler = async (req, res) => {
//     if (req.method === 'POST') {
//         try {
//             const { habits, error } = await addHabits()
//             if (error) throw new Error(error)

//             return res.status(200).json({ habits })
//         } catch (error) {
//             return res.status(500).json({ error: error.message})
//         }
//     }

//     res.setHeader('Allow', ['POST'])
//     res.status(405).end(`Method ${req.method} is not allowed.`)
// }

// export { handler as POST }

export { addHabit as POST }