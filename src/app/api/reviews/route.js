import clientPromise from "@/lib/mongodb";
import { application } from "express";

export async function POST(request) {
    try {
        const client = await clientPromise;
        const db = client.db('barry-reviews'); //DB name is barry-reviews 
        const collection = db.collection('reviews'); //Collection name is reviews

        //Parse the JSON body from the request
        const body = await request.json();
        const { name, rating, comment } = body;

        //Validate that all fields are provided 
        if(!name || !rating || !comment) {
            return new Response(JSON.stringify({message: 'All fields are required.'}), {status: 400});
        }

        //Create a new review object, including a timestamp
        const newReview = {
            name,
            rating,
            comment,
            createdAt: new Date(), 
        };

        //Insert the new review into the collection
        await collection.insertOne(newReview);

        return new Response(JSON.stringify({message: 'Review submitted successfully.'}), {
            status: 201,
            headers: { 'Content-Type': 'application/json'},
        })
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({message: 'Something went wrong.'}), {
            status:500,
            headers: {'Content-Type': 'application/json'},
        });
    }
}

export async function GET() {
    try {
        const client = await clientPromise;
        const db = client.db('barry-reviews'); //DB name is barry-reviews 
        const collection = db.collection('reviews'); //Collection name is reviews

        const reviews = await collection 
            .find({rating: {$gte: 4} }) //Only fetch reviews with 4 stars or higher 
            .sort({createdAt: -1}) //Sort by creatAt descending (newest first)
            .limit(10) //Limit results to a maxium ofo 10 reviews
            .toArray(); //Convert the cursor into an array

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