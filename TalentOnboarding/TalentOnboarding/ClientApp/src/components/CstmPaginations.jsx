import React from 'react';
import { Pagination } from 'semantic-ui-react';

const CstmPagination = ({ itemsPerPage, totalitems, paginate, type  }) => {
  const pageNumbers = [];
  

  for (let i = 1; i <= Math.ceil(totalitems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

   const onChange = (e, ) =>{


  }
  const getHrefType = () => {
    let hrefType = "";
    if(type == "Customers"){hrefType = "./Customers/!#";}
    else if (type == "Products"){hrefType = "./Products/!#";}
    else if (type == "Stores"){hrefType = "./Stores/!#";}
    else if (type == "Sales"){hrefType = "./Sales/!#";}
    else {}
    return hrefType
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
    //   onPageChange = {() => paginate(number)}

    // />

    //bootstrap ver.
    <nav>
      <ul className='pagination' >
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href={getHrefType} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CstmPagination;