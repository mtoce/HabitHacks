import clientPromise from '.'

let client
let db
let habits

// Initialize the database connection
async function init() {
    if (db) return
    try {
        client = await clientPromise
        db = await client.db('habithacks')
        habits = await db.collection('habits')
    } catch (error) {
        throw new Error('Failed to establish connection to database')
    }
}

// Call the initialize function
;(async () => {
    await init()
})()



export async function addHabits() {
    try {
        if (!habits) await init()
        let result = await habits
            .insertOne({
                habit: 'Drink water',
                description: 'Stay hydrated & flush out toxins',
                category: 'Healthy body',
                special: 'Become a hydration sensation! Drinking enough water increases your energy levels and your brain function. Staying hydrated is key to your health.',
                icon: 'Droplet',
                color: 'Blue',
                unit: 'glass',
                units: 'glasses',
            }
            )
            
            return result.insertedId;
        } catch (error) {
            return { error: "Failed to insert habits!'"}
    }
}