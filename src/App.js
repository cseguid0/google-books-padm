import './App.css';
import {Component} from "react";
import Result from './Result';
import Form from './Form'
import axios from "axios";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books:[]
    };
  }

  search (title, author, type) {
    if ((title === "") && (author === "")) {
      return
    }
    var req = axios.create({
      baseURL: 'https://www.googleapis.com/books/v1/',
      timeout: 1000
    });

    req.get('/volumes', {
      params: {
        q: title + " " + author,
        printType: type
      }
    }).then((data) => {
      this.setState({
        books: [...data.body.itmes]
      })
    });
  }

  render() {
    return (
      <div className="App">
        <h1 id="title">Book search</h1>
        <Form search={this.search}/>
        <Result books={this.state.books} />
      </div>
    );
  }
}

export default App;
