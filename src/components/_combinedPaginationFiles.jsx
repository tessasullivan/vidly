//Pagination.jsx
import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {/* eslint-disable */}
        {pages.map(page => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
            {/* eslint-enable */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

//paginate.js
import _ from "lodash";

export default function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //_(items) // returns a lodash object
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
