import React, { Component } from "react";
import "./style.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Saved extends Component {
  state = {};

  componentDidMount() {
  }

  render() {
    return (
      <div className="row content">
          <div className="col-6 mt-2 mb-2">
            <Card className="text-center projectCard" key={this.props.id}>
              <Card.Header>{this.props.name}</Card.Header>
              <Card.Body>
                   <img alt={this.props.description} src={this.props.img}></img>
                   <Card.Text>
                        {this.props.description}
                   </Card.Text>
                   <a href={this.props.deployedURL}>
                        <Button className="mr-2" variant="primary">View</Button>
                   </a>
                   <a href={this.props.repositoryURL}>
                        <Button variant="primary">Delete</Button>
                   </a>
              </Card.Body>
            </Card>
        </div>
      </div>
    );
  }
}

export default Saved;