import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../BookCard/BookCard.css';

const BookCard = (props) => {
  const { book, author, summary } = props;
  return (
    <div className='BookCard'>
      <div className='CardContainer'>
        <h6>{book}</h6>
        <div>Author : {author}</div>
        <div>Summary : {summary}</div>
      </div>
    </div>
  )
}

export default BookCard