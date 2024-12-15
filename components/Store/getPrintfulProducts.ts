import axios from "axios";

interface PrintfulProduct {
    id: number;
    external_id: string;
    name: string;
    variants: Array<{
      id: number;
      name: string;
      price: string;
      in_stock: boolean;
    }>;
    thumbnail_url: string;
  }

export async function getPrintfulProducts() {
    try {
        console.log(process.env.NEXT_PUBLIC_PRINTFUL_API_KEY);
      // Ensure you store your API key in environment variables
      const response = await axios.get('/api/printFulProducts');
      console.log(response.data);
      return "hello";
    } catch (error) {
      console.log('Error fetching Printful products:', error);
      throw error;
    }
  }