import React from "react";
import BookCard from "./BookCard";

const Result = (props) => {
    return (
        <div>
            {
                props.books.map((book) => {
                    return <BookCard title={book.volumeInfo.title} author={book.volumeInfo.authors} url={book.volumeInfo.previewLink} />
                })
            }
        </div>
    );
}

export default Result;