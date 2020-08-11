import React, { Component } from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class BookCard extends Component {
  state = {
  };

  render() {
    return (
      <div className="row content">
        <div className="col-6 mt-2 mb-2">
            <Card className="text-center projectCard" key={this.props.id}>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Body>
                   <img alt={this.props.description} src={this.props.image}></img>
                   <Card.Text>
                        {this.props.description}
                   </Card.Text>
                   <Card.Text>
                       {this.props.authors}
                  </Card.Text>
                   <a href={this.props.link}>
                        <Button variant="primary">View On Website</Button>
                   </a>
              </Card.Body>
            </Card>
        </div>
      </div>
    );
  }
}

export default BookCard;