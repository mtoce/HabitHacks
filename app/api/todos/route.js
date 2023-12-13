import { NextResponse } from 'next/server';

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos"

const API_KEY = process.env.DATA_API_KEY

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL);

    const todos = await res.json();

    return NextResponse.json(todos);
}

export async function DELETE(req) {
    const { id } = await req.json()
        
    if (!id) return NextResponse.json({ 'message': 'ToDo id required' })

    await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        }
    })

    return NextResponse.json({ 'message': `Todo ${id} deleted successfully` })
}

export async function POST(req) {
    const { userId, title } = await req.json()
        
    if (!userId || !title) return NextResponse.json({ 'message': 'Missing required data' })

    const res = await fetch(DATA_SOURCE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })

    const newTodo = await res.json()

    return NextResponse.json(newTodo)
}

export async function PUT(req) {
    const { userId, id, title, completed } = await req.json()
        
    if (!userId || !id || !title || typeof(completed) !== 'boolean') return NextResponse.json({ 'message': 'Missing required data' })

    const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
        },
        body: JSON.stringify({
            userId, title, completed
        })
    })

    const updatedTodo = await res.json()

    return NextResponse.json(updatedTodo)
}


// attempted combined handler export below - getting 405
// export default async function handler(req, res) {
//     if (req.method === 'GET') {
//         try {
//             const result = await fetch(DATA_SOURCE_URL)
//             const todos = await result.json()
//             // return NextResponse.json(todos)
//             res.status(200).json({ result })
//         } catch (err) {
//             res.status(500).send({ error: 'failed to fetch data' })
//         }
//     } else if (req.method === 'DELETE') {
        // const { id } = await req.json()
        
        // if (!id) return NextResponse.json({ 'message': 'ToDo id required' })

        // await fetch(`${DATA_SOURCE_URL}/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'API-Key': API_KEY,
        //     }
        // })

        // return NextResponse.json({ 'message': `Todo ${id} deleted successfully` })
//     }
// }