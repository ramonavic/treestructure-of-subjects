import React from 'react';

class SecondSubject extends React.Component {
  constructor(props) {
    super()

    this.state ={
      id: props.id,
      subject: props.subject
    }
    console.log("State of Second Subject", this.state.subject)
  }

  render() {
    return (
      <li> <p> {this.state.subject} </p> </li>
    )

  }


}

export default SecondSubject;
