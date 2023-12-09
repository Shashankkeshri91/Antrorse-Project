// Function to convert currency
function convertCurrency() {
  // Get user input
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = "INR";  // Fixed as you are converting from INR
  const toCurrency = document.getElementById('toCurrency').value;

  // Validate the amount
  if (!amount || isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  // Fetch the latest conversion rates
  fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9Nug3725X9lNh324VAj4p57DZ1hEMkDxQ2QgGCdO&base_currency=INR")
    .then(response => {
      // Check for a successful response
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // Get the conversion rate for the target currency
      const conversionRate = data.data[toCurrency];

      // Check if the conversion rate is available
      if (conversionRate) {
        // Calculate the converted amount
        const convertedAmount = amount * conversionRate;

        // Display the result
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      } else {
        // Display an alert if the conversion rate is not available
        alert('Conversion rate not available for selected currencies.');
      }
    })
    .catch(error => {
      // Handle errors during the fetch operation
      console.error('Error fetching conversion rates:', error);
      alert('Failed to fetch conversion rates. Please try again later.');
    });
}
