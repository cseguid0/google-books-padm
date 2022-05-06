import React from "react";

const BookCard = (props) => {
    return (
        <div>
            Title: {props.title}<br />
            Author: {props.author}<br />
            URL: <a href={props.url}>{props.url}</a><br />
        </div>
    );
}

export default BookCard;