import React, { useState } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PaginationButton = ({ page, currentPage, onClick }) => (
  <button
    className={`h-10 px-2 m-1 transition-colors duration-150 rounded-lg focus:shadow-outline hover:bg-gray-200 ${currentPage === page && "bg-gray-200"}`}
    onClick={() => onClick(page)}
  >
    {page}
  </button>
);

const Table = ({ data, columns, itemsPerPage = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = itemsPerPage * (currentPage - 1);
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((item, index) => (
            <tr key={index}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item[column.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="py-3 md:flex items-center justify-between">
        <p className='pb-5'>Page {currentPage} of total {totalPages} pages</p>
        <div>
          <button
            className={`h-10 px-2 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
            onClick={() => handleClick(1)}
            disabled={currentPage === 1}
          >
            <FaAngleDoubleLeft />
          </button>
          <button
            className={`h-10 px-2 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 ${currentPage === 1 && "opacity-50 cursor-not-allowed"}`}
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <FaAngleLeft />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index}
              page={index + 1}
              currentPage={currentPage}
              onClick={handleClick}
            />
          ))}
          <button
            className={`h-10 px-2 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <FaAngleRight />
          </button>
          <button
            className={`h-10 px-2 m-2 text-gray-100 transition-colors duration-150 bg-gray-700 rounded-lg focus:shadow-outline hover:bg-gray-800 ${currentPage === totalPages && "opacity-50 cursor-not-allowed"}`}
            onClick={() => handleClick(totalPages)}
            disabled={currentPage === totalPages}
          >
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;





