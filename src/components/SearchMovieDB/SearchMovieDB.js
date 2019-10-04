import React, { Component } from "react";

export class SearchMovieDB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      result: null
    };
  }

  componentDidMount() {
    const apiKey = "247c47936bed65959f5837b6aa7bbce9";
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURI(this.props.searchTerm) +
        "&api_key=" +
        apiKey +
        "&language=en-US&page=1&include_adult=false"
    )
      .then(response => response.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            result: result.results
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, result } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {result.map(item => (
            <li key={item.id}>
              {item.title} - {item.overview}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default SearchMovieDB;
