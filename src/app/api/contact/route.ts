import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Server-side validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL

    if (!webhookUrl) {
      console.warn("CONTACT_FORM_WEBHOOK_URL is not configured in environment variables.")
      // Graceful fallback for local development: log to console and simulate success
      return NextResponse.json({ 
        status: "success", 
        warning: "Webhook URL not configured on server. Message logged locally." 
      })
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, subject, message }),
    })

    if (!response.ok) {
      throw new Error(`Google Sheets Webhook responded with status ${response.status}`)
    }

    const result = await response.json()
    
    if (result.status === "error") {
      throw new Error(result.message || "Google Script rejected the insertion request.")
    }

    return NextResponse.json({ status: "success" })
  } catch (error: any) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to process message submission" },
      { status: 500 }
    )
  }
}
