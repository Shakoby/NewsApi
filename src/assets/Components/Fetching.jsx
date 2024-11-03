import React, { useState, useEffect } from 'react';
import Card from './Card';
import Pagination from './Pagination'; // Import the Pagination component

//Everything Endpoint

const Fetch = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [searchQ, setSearchQ] = useState('Bitcoin'); // Query for API fetch
  const [inputValue, setInputValue] = useState(searchQ); // Input field value

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10; // Number of articles to show per page

  useEffect(() => {
    // Fetch data from the API
    fetch(`https://newsapi.org/v2/everything?q=${searchQ}&pageSize=${articlesPerPage}&page=${currentPage}&language=en&apiKey=aa8e74ab640d47478f64e2871d3918b3`)
      .then((response) => {
        console.log('Response:', response); // Log the response
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTotalResults(data.totalResults);
        console.log('Parsed data:', data);
        setData(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [searchQ, currentPage]); // Fetch data whenever searchQ or currentPage changes

  const handleSearch = () => {
    setSearchQ(inputValue); // Update searchQ to trigger fetch
    setCurrentPage(1); // Reset to the first page on new search
    setLoading(true); // Show loading state during fetch
  };

  const totalPages = Math.ceil(totalResults / articlesPerPage); // Calculate total pages

  // Functions to handle pagination
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h1>Test changes News Api</h1>
      <h2>Total Results: {totalResults}</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue as user types
        placeholder="Search news..."
      />
      <button onClick={handleSearch}>Search</button> {/* Trigger fetch on click */}
            {/* Pagination Component */}
            <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onNext={handleNextPage} 
        onPrev={handlePrevPage} 
      />
      <ul>
        {data.map((item) => (
          <li key={item.url}>
            <Card title={item.title} desc={item.description} img={item.urlToImage} url={item.url} />
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default Fetch;
