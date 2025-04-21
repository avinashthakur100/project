import React, { useState, useEffect } from "react";

const Pagination = ({ data, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1); 
  const totalPages = Math.ceil(data.length / itemsPerPage); 
  
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage; 
    const end = start + itemsPerPage; 
    onPageChange(data.slice(start, end)); 
  }, [currentPage, data, itemsPerPage, onPageChange]);

  const getPageNumbers = () => {
    const totalVisible = 5; 
    let start = Math.max(1, currentPage - Math.floor(totalVisible / 2)); 
    let end = start + totalVisible - 1;

    // Adjust if near the end
    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - totalVisible + 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1)); 
  };

 
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages)); 
  }

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
    
      <button
        onClick={handlePrev}
        disabled={currentPage === 1} 
        style={{
          margin: "0 5px",
          padding: "6px 12px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: currentPage === 1 ? "#ccc" : "#007bff",
          color: "white",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Prev
      </button>

      {console.log(getPageNumbers)}
      {getPageNumbers().map((num) => (
        <button
          key={num}
          onClick={() => setCurrentPage(num)} 
          style={{
            margin: "0 5px",
            padding: "6px 12px",
            fontWeight: currentPage === num ? "bold" : "normal", 
            backgroundColor: currentPage === num ? "#007bff" : "#eee",
            color: currentPage === num ? "white" : "black",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {num}
        </button>
      ))}

      
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages} 
        style={{
          margin: "0 5px",
          padding: "6px 12px",
          border: "none",
          borderRadius: "4px",
          backgroundColor: currentPage === totalPages ? "#ccc" : "#007bff",
          color: "white",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
