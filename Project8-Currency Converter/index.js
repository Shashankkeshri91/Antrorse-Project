function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const fromCurrency = "INR";  // Fixed as you are converting from INR
  const toCurrency = document.getElementById('toCurrency').value;

  if (!amount || isNaN(amount)) {
    alert('Please enter a valid amount.');
    return;
  }

  fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_9Nug3725X9lNh324VAj4p57DZ1hEMkDxQ2QgGCdO&base_currency=INR")
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const conversionRate = data.data[toCurrency];
      if (conversionRate) {
        const convertedAmount = amount * conversionRate;
        document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
      } else {
        alert('Conversion rate not available for selected currencies.');
      }
    })
    .catch(error => {
      console.error('Error fetching conversion rates:', error);
      alert('Failed to fetch conversion rates. Please try again later.');
    });
}
