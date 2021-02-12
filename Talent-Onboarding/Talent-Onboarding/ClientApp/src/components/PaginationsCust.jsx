import React from 'react';
import { Pagination } from 'semantic-ui-react';

const PaginationCust = ({ itemsPerPage, totalitems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

   const onChange = (e, ) =>{


  }

  return (
    //sematic ver.
    // <Pagination 
    //   boundaryRange = {0}
    //   defaultActivePage = {1}
    //   //activePage = {paginate}
    //   ellipsisItem={null}
    //   firstItem={null}
    //   lastItem={null}
    //   siblingRange={2}
    //   totalPages={Math.ceil(totalitems / itemsPerPage)}
    //   onPageChange = {this.onChange}

    // />

    //bootstrap ver.
    <nav>
      <ul className='pagination' >
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='/customers/!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default PaginationCust;