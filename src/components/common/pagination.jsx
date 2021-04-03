import React from 'react';
import _ from 'lodash';


function Pagination(props) {
    const {itemsCount,pageSize,onPageChange,currentPage} = props;
    const pagesCount=Math.ceil(itemsCount/pageSize);
    let pages=[];
    if(pagesCount>1)  pages=_.range(1,pagesCount+1);
    _.range()
    return (
        <ul className="pagination">
            {pages.map(page=>(
                <li key={page} className={currentPage===page?"page-item active":"page-item"}><a onClick={()=>onPageChange(page)} className="page-link" href=" #">{page}</a></li>
                ))}
        </ul>
    );
}

export default Pagination;