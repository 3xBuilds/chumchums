// File: app/api/printful/products/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    console.log('Printful API Key:', process.env.PRINTFUL_API_KEY?.slice(0, 5) + '...');
    
    const response = await axios.get('https://api.printful.com/store/products', {
      headers: {
        'Authorization': `Bearer ${process.env.PRINTFUL_API_KEY}`,
      }
    });

    return NextResponse.json({prods: response.data.result}, { status: 200 });
  } catch (error) {
    console.error('Printful API Error:', error);
    
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { 
          message: 'Error fetching Printful products',
          details: error.response?.data || error.message 
        }, 
        { status: error.response?.status || 500 }
      );
    } else {
      return NextResponse.json(
        { 
          message: 'Unexpected error occurred',
          details: String(error)
        }, 
        { status: 500 }
      );
    }
  }
}