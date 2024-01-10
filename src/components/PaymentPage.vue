<template>
    <div>
      <h1>Payment Page</h1>
      <div class="card card-6">
        <button class="btn btn--radius-2 btn--blue-2" @click="makePayment">Make Payment</button>
      </div>
      <!-- <button @click="makePayment">Pay with Paystack</button> -->
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentPage',
    data() {
      return {
        paystackPublicKey: 'pk_live_9b468739de32f8f31302431f9231b36a49caff60' // Replace with your Paystack Public Key
      };
    },
    methods: {
      makePayment() {
        let handler = window.PaystackPop.setup({
          key: this.paystackPublicKey,
          email: 'weneportharcourt@gmail.com', // Replace with customer's email
          amount: 200000, // Amount in kobo
          currency: 'NGN',
          callback: (response) => {
            alert('Payment successful. Reference: ' + response.reference);
            // Here you can call your backend to verify the payment or to do further processing
          },
          onClose: () => {
            alert('Transaction was not completed');
          },
        });
        handler.openIframe();
      }
    },
    mounted() {
      // Load Paystack script on mount
      let script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      document.head.appendChild(script);
    }
  };
  </script>
  