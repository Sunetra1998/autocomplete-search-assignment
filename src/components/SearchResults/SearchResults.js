import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../SearchResults/SearchResults.css';

const SearchResults = ({ author, summary, searchResults }) => {

    return (
        <div className='SearchResults'>
            {searchResults.slice(0, 8).map((result, index) => {
                return (
                    <div className="CardContainer">
                        <div className="CardDetails">
                            <h5 key={index}>
                                Title : {result}
                            </h5>
                            <p>{author}</p>
                            <p>{summary}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SearchResults


// {searchResults.slice(0, 8).map((result, index) => (
//     <div key={index} className="search-card">
//       {result}
//     </div>