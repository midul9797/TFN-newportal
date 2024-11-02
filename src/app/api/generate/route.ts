import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
const GOOGLE_API_KEY = "AIzaSyBFNUcwQZorMT5Sua-SQKJ0B58Mrau40EY";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const genAi = new GoogleGenerativeAI(GOOGLE_API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-pro" });
    const data = await req.json();
    const prompt = data.body;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();
    return NextResponse.json({ output: output });
  } catch (error) {
    console.log(error);
  }
}
