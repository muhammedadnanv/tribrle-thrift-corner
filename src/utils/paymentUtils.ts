import axios from 'axios';

const PHONEPE_API_URL = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';

interface PaymentDetails {
  amount: number;
  transactionId: string;
  // Add other necessary fields
}

export const initiatePhonePePayment = async (paymentDetails: PaymentDetails) => {
  try {
    // In a real-world scenario, you would make an actual API call to PhonePe
    // For this example, we'll simulate a successful payment after a short delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulating a successful response
    return {
      success: true,
      message: 'Payment initiated successfully',
      paymentId: `PAY-${Date.now()}`,
      // Add other fields that PhonePe would typically return
    };

    // In a real implementation, you would use axios like this:
    // const response = await axios.post(PHONEPE_API_URL, paymentDetails, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // Add any required authentication headers
    //   },
    // });
    // return response.data;
  } catch (error) {
    console.error('Error initiating PhonePe payment:', error);
    throw error;
  }
};