import clientPromise from "@/lib/mongodb";
import { application } from "express";

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('barry-reviews'); //DB name is barry-reviews 
        const collection = db.collection('reviews');

        const body = await request.json();
        const { name, rating, comment } = body;
        
        if(!name || !rating || !comment) {
            return new response(JSON.stringify({message: 'All fields are required.'}), {status: 400});
        }

        const newReview = {
            name,
            rating,
            comment,
        };

        await collection.insertOne(newReview);

        return new Response(JSON.stringify({message: 'Review submitted successfully.'}), {
            status: 201,
        })
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Something went wrong.'}), {
            status:500
        });
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('barry-reviews'); //DB name is barry-reviews 
        const collection = db.collection('reviews');

        const reviews = await collection.find().sort({createdAt: -1}).toArray();

        return new Response(JSON.stringify(reviews), {
            status:200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Failed to fetch reviews.'}), {
            status:500
        });
    }
}