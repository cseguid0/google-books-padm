import "./Form.css";
import React from "react";

function Form(props) {

    const search = (e) => {
        e.preventDefault();
        var title = document.forms["myForm"]["title"];
        var author = document.forms["myForm"]["author"];
        var type = document.forms["myForm"]["select"];

        props.search(title, author, type);
    }

    return (
        <form className="Form" name="myForm">
          <input type="text" name="title" placeholder="Title" /><br />
          <input type="text" name="author" placeholder="Author" /><br />
          <button type="submit" onClick={search} id="search">Search books</button><br />
          <input type="radio" id="all" name="select" value="all" defaultChecked />
          <label for="all">All</label>
          <input type="radio" id="books" name="select" value="books" />
          <label for="books">Books</label>
          <input type="radio" id="magazines" name="select" value="magazines" />
          <label for="magazines">Magazines</label>
        </form>
    )
}

export default Form;