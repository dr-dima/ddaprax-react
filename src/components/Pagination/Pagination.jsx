import React from 'react';

const Pagination = ({ page, totalPages, changePage }) => {

    const getPager = (totalPages, page = 1, perPage = 10) => {

        let items = new Array(totalPages).fill().map((_, idx) => idx + 1);

        let startPos = Math.min(page - 1, totalPages - perPage + 1);
        startPos = startPos > 0 ? startPos : 1;

        let endPos = startPos + perPage;
        endPos = Math.min(endPos - 1, totalPages);

        let resArr = items.slice(startPos - 1, endPos);

        return {
            pagerArr: resArr,
            nextItem: getNextItem(page, totalPages),
            prevItem: getPrevItem(page)
        };
    }

    const getNextItem = (page, totalPages) => {
        return page === totalPages ? -1 : page;
    }

    const getPrevItem = (page) => {
        return (page - 1) === 0 ? -1 : page - 2;
    }

    const pager = getPager(totalPages, page + 1, 10);

    return (
        <>
            {
                pager.pagerArr.length > 1 &&
                <div className='pager__wrapper'>
                    <div className='pager'>
                        {pager.prevItem !== -1 &&
                            <span
                                className='pager__item pager__item__prev'
                                key="prev"
                                onClick={() => changePage(pager.prevItem)}
                            >{'<'}</span>
                        }
                        {pager.pagerArr.map(p =>
                            <span
                                key={p}
                                className={(p - 1) === page ? "pager__item pager__current" : "pager__item"}
                                onClick={() => changePage(p - 1)}
                            >{p}</span>
                        )}
                        {pager.nextItem !== -1 &&
                            <span
                                className='pager__item pager__item__next'
                                key="next"
                                onClick={() => changePage(pager.nextItem)}
                            >{">"}</span>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default Pagination;