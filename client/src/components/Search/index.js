import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import BookCard from "../BookCard";

class Search extends Component {
  state = {
    input: "",
    results: []
  };

  componentDidMount(){
  }

  handleInputChange = event => {
      let value = event.target.value;
      this.setState({
        input: value
      });
  };

  handleFormSubmit = event => {
  event.preventDefault();
  var searchResults = [];
    axios.get("https://www.googleapis.com/books/v1/volumes?q="+event.target.form[0].value)
      .then(res => {
        searchResults.push(res.data.items);
      })
        this.setState({
            results: searchResults
        })
        console.log(searchResults);
}

  render(){
    return (
      <div className="row content">

            <Card className="text-center projectCard" key={this.props.id}>
              <Card.Header>
                <form className="form">
                  <input
                    onChange={this.handleInputChange}
                    type="text"
                    placeholder="Search"
                    value={this.state.input}
                  />
                  <button className="searchButton" onClick={this.handleFormSubmit}>Submit</button>
                </form>
              </Card.Header>
              <Card.Body>
               <img alt={this.props.description} src={this.props.img}></img>
               <Card.Text>
                    {this.props.description}
               </Card.Text>
               <a href={this.props.deployedURL}>
                    <Button className="mr-2" variant="primary">View</Button>
               </a>
               <a href={this.props.repositoryURL}>
                    <Button variant="primary">Save</Button>
               </a>
              </Card.Body>
            </Card>
                        <div>
                        {this.state.results.map((a,index)=>(
                            <BookCard key={index}
                            name={a.name}
                            description={a.description}
                            deployedURL={a.deployedURL}
                            repositoryURL={a.repositoryURL}
                            img={a.img}/>
                         ))}
                         </div>
      </div>
    )
  }
}

export default Search;