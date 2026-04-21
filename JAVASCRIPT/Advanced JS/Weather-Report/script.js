// // WEATHER APP JAVASCRIPT GUIDE
// //
// // BUILD THIS STEP BY STEP:
// //
// // ========================================
// // STEP 1: API SETUP
// // ========================================
// // - Get your Visual Crossing API key (free tier available)
// // - Store it in a const API_KEY
// // - Store the base URL in const API_BASE_URL
// // - Example: https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline
// //
// // - Create an async function fetchWeatherData(location) that:
// //   * Takes a location string as parameter
// //   * Uses fetch() to get data from: `${API_BASE_URL}/${location}?key=${API_KEY}&contentType=json`
// //   * Returns the JSON data
// //   * Handles errors with try/catch
// //   * Logs the raw data to console for debugging
// //
// // ========================================
// // STEP 2: DATA PROCESSING
// // ========================================
// // - Create a function processWeatherData(rawData) that:
// //   * Extracts current conditions from rawData.currentConditions
// //   * Extracts the 7-day forecast from rawData.days
// //   * Returns an object with structure:
// //     {
// //       location: resolvedAddress,
// //       current: {
// //         temp, feelsLike, description, humidity, windSpeed, uvIndex, visibility
// //       },
// //       forecast: [
// //         { date, tempMax, tempMin, description, humidity, windSpeed, uvIndex },
// //         ...7 items
// //       ]
// //     }
// //
// // ========================================
// // STEP 3: TEMPERATURE CONVERSION UTILITIES
// // ========================================
// // - Create a isCelsius variable (set to true for default)
// // - Create function fahrenheitToCelsius(fahrenheit) that converts F to C
// // - Create function getTemp(fahrenheit) that returns temp in selected unit
// // - Create function getWindSpeed(mphSpeed) that converts mph to kph when needed
// //
// // ========================================
// // STEP 4: WEATHER ICONS
// // ========================================
// // - Create a function getWeatherIcon(description) that:
// //   * Takes weather description string
// //   * Returns appropriate emoji based on conditions:
// //     - 'clear' or 'sunny' → ☀️
// //     - 'cloudy' or 'overcast' → ☁️
// //     - 'cloud' → ⛅
// //     - 'rain' → 🌧️
// //     - 'thunder' or 'storm' → ⛈️
// //     - 'snow' → ❄️
// //     - 'fog' or 'mist' → 🌫️
// //     - 'wind' → 💨
// //     - 'hail' → 🧊
// //     - 'sleet' → 🌨️
// //     - default → 🌡️
// //
// // ========================================
// // STEP 5: DOM DISPLAY FUNCTIONS
// // ========================================
// //
// // A) displayCurrentWeather(weatherData):
// //    - Get location and current from weatherData
// //    - Update #location with location text
// //    - Update #weatherIcon with emoji from getWeatherIcon()
// //    - Update #temp with temperature + unit (°C or °F)
// //    - Update #description with weather description
// //    - Update #feelsLike with feels-like temp
// //    - Update #humidity with humidity percentage
// //    - Update #windSpeed with wind speed + unit (kph or mph)
// //    - Call setBackgroundByWeather() with description
// //    - Remove 'hidden' class from #currentWeather section
// //
// // B) displayForecast(forecastArray):
// //    - Clear the #forecast container
// //    - Loop through each day in forecast
// //    - For each day, create a forecast-card div with:
// //      * Date formatted (e.g., "Apr 15")
// //      * Weather emoji
// //      * Description
// //      * Max and min temperatures with units
// //    - Append each card to #forecast
// //    - Remove 'hidden' class from #forecastSection
// //
// // C) setBackgroundByWeather(description):
// //    - Check what the description says
// //    - Set document.body.style.background to different gradients:
// //      * Clear/Sunny → purple gradient
// //      * Cloudy → gray gradient
// //      * Rain → dark blue gradient
// //      * Snow → light/white gradient
// //      * Fog/Mist → gray gradient
// //      * Storm/Thunder → very dark gradient
// //
// // D) refreshDisplayedTemperatures(weatherData):
// //    - Called when user toggles between °F and °C
// //    - Update all displayed temperatures and units
// //    - Update forecast card temperatures
// //
// // ========================================
// // STEP 6: LOADING & ERROR FUNCTIONS
// // ========================================
// //
// // A) showLoading():
// //    - Remove 'hidden' from #loading
// //    - Add 'hidden' to #errorMessage, #currentWeather, #forecastSection
// //
// // B) hideLoading():
// //    - Add 'hidden' to #loading
// //
// // C) showError(message):
// //    - Set #errorMessage text content to message
// //    - Remove 'hidden' from #errorMessage
// //    - Add 'hidden' to #loading, #currentWeather, #forecastSection
// //
// // ========================================
// // STEP 7: EVENT LISTENERS
// // ========================================
// //
// // A) DOM Reference Variables:
// //    - Get references to all important elements:
// //      * #searchForm
// //      * #locationInput
// //      * #toggleTemp
// //      * #loading
// //      * #errorMessage
// //      * #currentWeather
// //      * #forecastSection
// //      * #forecast
// //
// // B) Search Form Submission:
// //    - Add 'submit' event listener to searchForm
// //    - Prevent default form behavior
// //    - Get the input value (trim whitespace)
// //    - Validate input isn't empty
// //    - Call showLoading()
// //    - Try to:
// //      * Fetch weather using fetchWeatherData()
// //      * Process with processWeatherData()
// //      * Display with displayCurrentWeather() and displayForecast()
// //      * Hide loading
// //      * Clear input field
// //    - Catch errors and show error message
// //
// // C) Temperature Toggle:
// //    - Add 'click' listener to #toggleTemp button
// //    - Toggle isCelsius variable
// //    - Call refreshDisplayedTemperatures()
// //    - Update button text to show current state
// //
// // D) Page Load Event:
// //    - On window 'load' event:
// //      * Fetch default weather for 'New York'
// //      * Process and display it
// //      * Catch any errors silently
// //
// // ========================================
// // STEP 8: TIPS & BEST PRACTICES
// // ========================================
// //
// // - Use console.log() to debug API responses
// // - Test with DevTools Network tab to see API calls
// // - Use async/await for cleaner promise handling
// // - Always validate API responses before accessing properties
// // - Handle errors gracefully with user-friendly messages
// // - Keep your API key secure (don't commit to GitHub without .env)
// // - Test temperature conversion with known values
// // - Test emoji function with various weather keywords
// // - Make sure all id attributes match between HTML and JavaScript
// //
// // ========================================
// // STEP 9: PROGRESSION CHECKLIST
// // ========================================
// //
// // [ ] API key obtained and configured
// // [ ] fetchWeatherData() working (test in console)
// // [ ] processWeatherData() correctly extracts API data
// // [ ] Temperature conversion functions working
// // [ ] getWeatherIcon() returns correct emojis
// // [ ] displayCurrentWeather() updates all fields
// // [ ] displayForecast() creates forecast cards
// // [ ] setBackgroundByWeather() changes background
// // [ ] Form submission works and displays weather
// // [ ] Error handling works for bad locations
// // [ ] Temperature toggle switches between units
// // [ ] Default weather loads on page load
// // [ ] Mobile responsive layout looks good
// // [ ] All animations are smooth
// // [ ] Loading spinner appears while fetching
// //
// // START CODING YOUR JAVASCRIPT HERE
