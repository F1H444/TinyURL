import { NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { nanoid } from 'nanoid';

export async function POST(request: Request) {
    try {
        const { url } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Generate a short code (6 chars)
        // We use a custom simple random string generator if nanoid isn't available or just use math.random for simplicity in this demo environment
        // to avoid dependency issues if nanoid isn't installed.
        const code = Math.random().toString(36).substring(2, 8);

        // Store in our in-memory db
        db.set(code, url);

        // Get the base URL from the request headers to ensure it works on localhost or production
        const host = request.headers.get('host');
        const protocol = request.headers.get('x-forwarded-proto') || 'http';
        const shortUrl = `${protocol}://${host}/${code}`;

        return NextResponse.json({ shortUrl });
    } catch (error) {
        console.error('Error shortening URL:', error);
        return NextResponse.json({ error: 'Failed to shorten URL' }, { status: 500 });
    }
}
