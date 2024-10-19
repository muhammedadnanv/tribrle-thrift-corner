import axios from 'axios';

const PHONEPE_API_URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';

interface PaymentDetails {
  amount: number;
  transactionId: string;
  // Add other necessary fields
}

export const initiatePhonePePayment = async (paymentDetails: PaymentDetails) => {
  try {
    const response = await axios.post(PHONEPE_API_URL, paymentDetails, {
      headers: {
        'Content-Type': 'application/json',
        // Add any required authentication headers
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error initiating PhonePe payment:', error);
    throw error;
  }
};