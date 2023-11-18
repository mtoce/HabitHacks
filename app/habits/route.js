import { addHabits } from '@/lib/mongo/habits'

// import clientPromise from "@/lib/mongodb";

// export default async (req, res) => {
//    try {
//        const client = await clientPromise;
//        const db = client.db("habithacks");

//        const movies = await db
//            .collection("movies")
//            .find({})
//            .sort({ metacritic: -1 })
//            .limit(10)
//            .toArray();

//        res.json(movies);
//    } catch (e) {
//        console.error(e);
//    }
// };

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