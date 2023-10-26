const baseCurrency = 'EUR'; // set the base currency here

    //the free api is limited.....so I can just close that while I am not testing
    //change the url if it is need to be connectted online
// const apiUrl = `https://v6.exchangerate-api.com/v6/709b6a33ec5b5a011299d8ff/latest/${baseCurrency}`;
const apiUrl= 'Intro/Rate Data BackUp.txt';

function fetchExchangeRates() {

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.result === 'success') {
                const updateTime = data.time_last_update_utc;
                const exchangeRates = data.conversion_rates;
                const exchangeRatesContainer = document.getElementById('exchange-rates');

                // get update time
                document.getElementById('time-update').innerHTML = 'The exchange updating time:  ' + updateTime;
                
                // build option
                let CurrencyUser = '';

                // Clear previous content and set the beginning of table
                let tableRate = '<table><tr><th>Currency</th><th>Rate</td></tr>';

                // Loop through the exchange rates and display them in table, and input those into options
                for (const currency in exchangeRates) {
                    const rate = exchangeRates[currency];
                    tableRate += `<tr><td class="centered-column">${currency}</td><td> ${rate}</td></tr>`;
                    CurrencyUser += `<option value=${rate}>${currency}</option>`;
                }
                tableRate += '</table>'; //the end of the table
                exchangeRatesContainer.innerHTML = tableRate ; //put the table value into html
                document.getElementById('CurrencySelect').innerHTML = CurrencyUser ;

            } else {
                console.error('Error fetching exchange rates:', data.error_type);
            }
        })
        .catch((error) => console.error('Fetch error:', error));
}
// Call the function to fetch and display exchange rates

fetchExchangeRates()

let rate;
let hourlyFee; //global variable

function calculateRate() {
    let element = document.getElementById("CurrencySelect");
    rate= element.value;
    document.getElementById('select').innerHTML = rate;
}

function calculateHourly() {
    let element = document.getElementById("PlanSelect");
    hourlyFee= element.value;
    document.getElementById('selectHourly').innerHTML = hourlyFee;
}

function calculateFee(){
    let time = document.getElementById("hours");
    let hrs= time.value;
    document.getElementById('Fee').innerHTML = (hrs*rate*hourlyFee).toFixed(4);
}

