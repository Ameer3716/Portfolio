import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gqjekboujbchlqjajpkv.supabase.co';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Insert into Supabase
    const { data: dbData, error: dbError } = await supabase
      .from('contacts')
      .insert([
        { name, email, message }
      ]);

    if (dbError) {
      console.error('Supabase error:', dbError);
      // Depending on table setup, this might fail if 'contacts' table doesn't exist yet, 
      // but we continue to email sending anyway.
    }

    // 2. Send email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'ameersultan0310@gmail.com', // Sending to the user's email
      subject: `New Portfolio Message from ${name}`,
      html: `
        <h3>New message from your portfolio:</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
