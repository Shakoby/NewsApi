import React, { useState, useEffect } from 'react';
import Card from './Card';
// import Pagination from './Pagination';

//Top Headline Endpoint

const Fetch2 = () => {
    // State to hold fetched data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

    const [selectValue, setSelectValue] = useState('general')
  


        useEffect(() => {
            // Fetch data from the API
            fetch(`https://newsapi.org/v2/top-headlines?category=${selectValue}&apiKey=c51c6def4f9e491799fd1303063a22df`)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json(); // Parse JSON data
            })
            .then((data) => {
                console.log('Parsed data:', data); // Log the parsed JSON data
                setTotalResults(data.totalResults); // Store the total number of results
                setData(data.articles); // Set the data to state
                setLoading(false); // Turn off loading state
            })
            .catch((error) => {
                setError(error.message); // Handle errors
                setLoading(false);
            });
        }, [selectValue]); // Empty dependency array means this only runs once on mount

    
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

    return ( 
        <div>
        <h1>Top Headlines</h1>
        <h2>Fetched Data: {totalResults}</h2>
        <select
                id="category-select"
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)} // Update selectValue on change
            >
                <option value="business">Business</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
            </select>


        <ul>
          {data.map((item) => (
            <li key={item.id}><Card title={item.title} desc={item.description} img={item.urlToImage} url={item.url}/></li>
          ))}
        </ul>
      </div>
     );
}
 
export default Fetch2;