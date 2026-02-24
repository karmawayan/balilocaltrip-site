import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Notification message for you (Admin)
    const waMessage = `
🚨 *NEW BOOKING - BALI LOCAL TRIP* 🚨
----------------------------------
👤 *Guest:* ${data.customer_name}
📱 *WhatsApp:* ${data.phone_number}
🗓️ *Date:* ${data.booking_date}
⏰ *Time:* ${data.pickup_time}
📍 *Pickup:* ${data.pickup_location}
🚗 *Vehicle:* ${data.car_type}
🗺️ *Itinerary:* ${data.itinerary}
💰 *Total:* IDR ${data.total_price.toLocaleString('id-ID')}

✅ *AI has confirmed the booking. Please assign a driver!*
    `;

    // Forwarding to your WhatsApp (using Fonnte example)
    await fetch('https://api.fonnte.com/send', {
      method: 'POST',
      headers: { 'Authorization': process.env.FONNTE_TOKEN || '' },
      body: new URLSearchParams({
        target: process.env.ADMIN_WHATSAPP || '',
        message: waMessage
      })
    });

    return NextResponse.json({ success: true, message: "Booking saved" });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
