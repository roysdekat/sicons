import axios from 'axios';

// Use async function to handle the await
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log(response.data);
    // Handle response data
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle error
    return null;
  }
}

// Call the function with the URL
fetchData('https://www.example.com