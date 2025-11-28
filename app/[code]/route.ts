import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ code: string }> }
) {
    const code = (await params).code;
    const longUrl = db.get(code);

    if (longUrl) {
        // 307 Temporary Redirect ensures the method and body are preserved if applicable,
        // but for a GET request it just redirects.
        // This is a direct server-side redirect. No intermediate page.
        return NextResponse.redirect(longUrl);
    }

    // If code not found, redirect to home
    return NextResponse.redirect(new URL('/', request.url));
}
